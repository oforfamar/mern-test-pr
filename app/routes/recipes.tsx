import { Link } from "react-router";
import { RecipeCard } from "@/components/RecipeCard";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import type { MetaFunction } from "react-router";

// Mock data - in a real app this would come from a database/API
const MOCK_RECIPES = [
  {
    id: "1",
    title: "Classic Spaghetti Carbonara",
    description:
      "A traditional Italian pasta dish with eggs, cheese, and pancetta",
    cookTime: 20,
    servings: 4,
    image:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop&auto=format",
    difficulty: "Medium" as const,
    tags: ["Italian", "Pasta", "Quick"],
  },
  {
    id: "2",
    title: "Chocolate Chip Cookies",
    description: "Soft and chewy homemade chocolate chip cookies",
    cookTime: 25,
    servings: 24,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
    difficulty: "Easy" as const,
    tags: ["Dessert", "Baking", "Sweet"],
  },
  {
    id: "3",
    title: "Grilled Salmon with Herbs",
    description:
      "Fresh salmon fillet grilled to perfection with aromatic herbs",
    cookTime: 15,
    servings: 2,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    difficulty: "Medium" as const,
    tags: ["Seafood", "Healthy", "Grilled"],
  },
  {
    id: "4",
    title: "Vegetable Stir Fry",
    description: "Quick and healthy vegetable stir fry with soy sauce",
    cookTime: 10,
    servings: 3,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    difficulty: "Easy" as const,
    tags: ["Vegetarian", "Healthy", "Quick"],
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "All Recipes - Recipe Organizer" },
    { name: "description", content: "Browse all your recipes" },
  ];
};

export default function Recipes() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Recipes</h1>
          <Link to="/recipes/new" className="btn btn-primary">
            Add New Recipe
          </Link>
        </div>

        <div className="mb-8">
          <SearchBar placeholder="Search recipes..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_RECIPES.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {MOCK_RECIPES.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              No recipes found
            </h2>
            <p className="text-gray-500 mb-8">
              Get started by adding your first recipe!
            </p>
            <Link to="/recipes/new" className="btn btn-primary">
              Add Your First Recipe
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
