import { prisma } from "../lib/db.server.js";
import type { Recipe, NewRecipe, RecipeFilters } from "../types/recipe.js";
import type { Prisma } from "../../generated/prisma/index.js";
import { PrismaClientKnownRequestError } from "../../generated/prisma/runtime/library.js";

export class RecipeService {
  /**
   * Get all recipes with optional filtering
   */
  static async getRecipes(filters?: RecipeFilters): Promise<Recipe[]> {
    const where: Prisma.RecipeWhereInput = {};

    if (filters?.search) {
      // MongoDB text search - using contains which works with MongoDB
      where.OR = [
        { title: { contains: filters.search, mode: "insensitive" } },
        { description: { contains: filters.search, mode: "insensitive" } },
        { tags: { has: filters.search } }, // MongoDB: use 'has' for single value in array
      ];
    }

    if (filters?.difficulty) {
      where.difficulty = filters.difficulty;
    }

    if (filters?.tags && filters.tags.length > 0) {
      // MongoDB: use 'hasSome' for multiple values
      where.tags = { hasSome: filters.tags };
    }

    if (filters?.maxCookTime) {
      where.cookTime = { lte: filters.maxCookTime };
    }

    const recipes = await prisma.recipe.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return recipes.map(this.mapPrismaRecipeToRecipe);
  }

  /**
   * Get a single recipe by ID
   */
  static async getRecipeById(id: string): Promise<Recipe | null> {
    const recipe = await prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) {
      return null;
    }

    return this.mapPrismaRecipeToRecipe(recipe);
  }

  /**
   * Create a new recipe
   */
  static async createRecipe(newRecipe: NewRecipe): Promise<Recipe> {
    const recipe = await prisma.recipe.create({
      data: {
        title: newRecipe.title,
        description: newRecipe.description,
        cookTime: newRecipe.cookTime,
        servings: newRecipe.servings,
        difficulty: newRecipe.difficulty,
        tags: newRecipe.tags,
        ingredients: newRecipe.ingredients,
        instructions: newRecipe.instructions,
        image: newRecipe.image || null,
      },
    });

    return this.mapPrismaRecipeToRecipe(recipe);
  }

  /**
   * Update an existing recipe
   */
  static async updateRecipe(
    id: string,
    updateData: Partial<NewRecipe>
  ): Promise<Recipe | null> {
    try {
      const recipe = await prisma.recipe.update({
        where: { id },
        data: {
          ...(updateData.title && { title: updateData.title }),
          ...(updateData.description && {
            description: updateData.description,
          }),
          ...(updateData.cookTime && { cookTime: updateData.cookTime }),
          ...(updateData.servings && { servings: updateData.servings }),
          ...(updateData.difficulty && { difficulty: updateData.difficulty }),
          ...(updateData.tags && { tags: updateData.tags }),
          ...(updateData.ingredients && {
            ingredients: updateData.ingredients,
          }),
          ...(updateData.instructions && {
            instructions: updateData.instructions,
          }),
          ...(updateData.image !== undefined && { image: updateData.image }),
        },
      });

      return this.mapPrismaRecipeToRecipe(recipe);
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return null; // Record not found
      }
      throw error;
    }
  }

  /**
   * Delete a recipe
   */
  static async deleteRecipe(id: string): Promise<boolean> {
    try {
      await prisma.recipe.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === "P2025"
      ) {
        return false; // Record not found
      }
      throw error;
    }
  }

  /**
   * Get all unique tags from all recipes
   */
  static async getAllTags(): Promise<string[]> {
    const recipes = await prisma.recipe.findMany({
      select: { tags: true },
    });

    const allTags = recipes.flatMap(
      (recipe: { tags: string[] }) => recipe.tags
    );
    return [...new Set(allTags)].sort();
  }

  /**
   * Get recipe statistics
   */
  static async getRecipeStats() {
    const totalRecipes = await prisma.recipe.count();
    const avgCookTime = await prisma.recipe.aggregate({
      _avg: { cookTime: true },
    });
    const difficultyDistribution = await prisma.recipe.groupBy({
      by: ["difficulty"],
      _count: { difficulty: true },
    });

    return {
      totalRecipes,
      avgCookTime: avgCookTime._avg.cookTime || 0,
      difficultyDistribution: difficultyDistribution.map((item: any) => ({
        difficulty: item.difficulty,
        count: item._count.difficulty,
      })),
    };
  }

  /**
   * Map Prisma Recipe to our Recipe interface
   */
  private static mapPrismaRecipeToRecipe(prismaRecipe: any): Recipe {
    return {
      id: prismaRecipe.id,
      title: prismaRecipe.title,
      description: prismaRecipe.description,
      cookTime: prismaRecipe.cookTime,
      servings: prismaRecipe.servings,
      image: prismaRecipe.image || "",
      difficulty: prismaRecipe.difficulty,
      tags: prismaRecipe.tags,
      ingredients: prismaRecipe.ingredients,
      instructions: prismaRecipe.instructions,
      createdAt: prismaRecipe.createdAt,
      updatedAt: prismaRecipe.updatedAt,
    };
  }
}
