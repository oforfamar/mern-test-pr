// import type { Route } from "./+types/home";
import { Link } from "react-router";
import { RecipeCard } from "@/components/RecipeCard";
import { Header } from "@/components/Header";
import type { MetaFunction } from "react-router";

// Mock data for initial recipes
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
];

export const meta: MetaFunction = () => {
  return [
    { title: "Recipe Organizer - Home" },
    {
      name: "description",
      content: "Organize and discover your favorite recipes",
    },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Recipe Organizer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover, organize, and share your favorite recipes. From quick
            weeknight dinners to elaborate weekend projects.
          </p>
          <div className="space-x-4">
            <Link to="/recipes/new" className="btn btn-primary">
              Add New Recipe
            </Link>
            <Link to="/recipes" className="btn btn-secondary">
              View All Recipes
            </Link>
          </div>
        </section>

        {/* Featured Recipes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_RECIPES.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <h3 className="text-3xl font-bold text-primary-600 mb-2">12</h3>
            <p className="text-gray-600">Total Recipes</p>
          </div>
          <div className="card text-center">
            <h3 className="text-3xl font-bold text-primary-600 mb-2">8</h3>
            <p className="text-gray-600">Favorite Recipes</p>
          </div>
          <div className="card text-center">
            <h3 className="text-3xl font-bold text-primary-600 mb-2">5</h3>
            <p className="text-gray-600">Categories</p>
          </div>
        </section>
      </main>
    </div>
  );
}
