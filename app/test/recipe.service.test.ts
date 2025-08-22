import { describe, it, expect } from "vitest";
import type { NewRecipe, RecipeFilters } from "../types/recipe.js";

// Test the types and interfaces
describe("Recipe Types", () => {
  it("should create a valid NewRecipe object", () => {
    const newRecipe: NewRecipe = {
      title: "Test Recipe",
      description: "A test recipe",
      cookTime: 30,
      servings: 4,
      difficulty: "Easy",
      tags: ["test"],
      ingredients: ["ingredient1", "ingredient2"],
      instructions: ["step1", "step2"],
      image: "test.jpg",
    };

    expect(newRecipe.title).toBe("Test Recipe");
    expect(newRecipe.difficulty).toBe("Easy");
    expect(newRecipe.tags).toContain("test");
    expect(newRecipe.ingredients).toHaveLength(2);
    expect(newRecipe.instructions).toHaveLength(2);
  });

  it("should create a valid RecipeFilters object", () => {
    const filters: RecipeFilters = {
      search: "pizza",
      difficulty: "Medium",
      tags: ["Italian", "Quick"],
      maxCookTime: 30,
    };

    expect(filters.search).toBe("pizza");
    expect(filters.difficulty).toBe("Medium");
    expect(filters.tags).toContain("Italian");
    expect(filters.maxCookTime).toBe(30);
  });

  it("should allow optional fields in NewRecipe", () => {
    const newRecipe: NewRecipe = {
      title: "Minimal Recipe",
      description: "Simple description",
      cookTime: 15,
      servings: 2,
      difficulty: "Easy",
      tags: [],
      ingredients: ["ingredient1"],
      instructions: ["step1"],
    };

    expect(newRecipe.image).toBeUndefined();
    expect(newRecipe.tags).toEqual([]);
  });

  it("should validate difficulty enum values", () => {
    const difficulties: Array<"Easy" | "Medium" | "Hard"> = [
      "Easy",
      "Medium",
      "Hard",
    ];

    difficulties.forEach((difficulty) => {
      const recipe: NewRecipe = {
        title: "Test",
        description: "Test",
        cookTime: 30,
        servings: 4,
        difficulty,
        tags: [],
        ingredients: ["test"],
        instructions: ["test"],
      };

      expect(["Easy", "Medium", "Hard"]).toContain(recipe.difficulty);
    });
  });
});
