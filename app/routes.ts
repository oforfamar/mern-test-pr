import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("recipes", "routes/recipes.tsx"),
  route("recipes/new", "routes/recipes.new.tsx"),
  route("recipes/:recipeId", "routes/recipes.$recipeId.tsx"),
] satisfies RouteConfig;
