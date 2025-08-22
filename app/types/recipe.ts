export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookTime: number;
  servings: number;
  image: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  ingredients?: string[];
  instructions?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface NewRecipe {
  title: string;
  description: string;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  ingredients: string[];
  instructions: string[];
  image?: string;
}

export interface RecipeFilters {
  search?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  tags?: string[];
  maxCookTime?: number;
}
