import { Header } from "@/components/Header";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";

type Recipe = {
  id: string;
  title: string;
  description: string;
  cookTime: number;
  servings: number;
  image: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  ingredients: string[];
  instructions: string[];
};

// Mock data - in a real app this would be fetched from a database
const MOCK_RECIPE: Recipe = {
  id: "1",
  title: "Classic Spaghetti Carbonara",
  description:
    "A traditional Italian pasta dish with eggs, cheese, and pancetta",
  cookTime: 20,
  servings: 4,
  image:
    "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=400&fit=crop",
  difficulty: "Medium" as const,
  tags: ["Italian", "Pasta", "Quick"],
  ingredients: [
    "400g spaghetti",
    "200g pancetta or guanciale, diced",
    "4 large eggs",
    "100g Pecorino Romano cheese, grated",
    "Freshly ground black pepper",
    "Salt for pasta water",
  ],
  instructions: [
    "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
    "While pasta cooks, heat a large skillet over medium heat. Add pancetta and cook until crispy, about 5-7 minutes.",
    "In a bowl, whisk together eggs, grated cheese, and plenty of black pepper.",
    "Reserve 1 cup pasta water before draining. Drain pasta and immediately add to the skillet with pancetta.",
    "Remove from heat and quickly toss with the egg mixture, adding pasta water gradually to create a creamy sauce.",
    "Serve immediately with additional cheese and black pepper.",
  ],
};

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: `${MOCK_RECIPE.title} - Recipe Organizer` },
    { name: "description", content: MOCK_RECIPE.description },
  ];
};

export function loader({ params }: LoaderFunctionArgs) {
  // In a real app, you would fetch the recipe by ID from your database
  const recipeId = params.recipeId;

  if (!recipeId || recipeId !== MOCK_RECIPE.id) {
    throw new Response("Recipe not found", { status: 404 });
  }

  return { recipe: MOCK_RECIPE };
}

export default function RecipeDetail({
  loaderData,
}: {
  loaderData: { recipe: typeof MOCK_RECIPE };
}) {
  const { recipe } = loaderData;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Recipe Header */}
          <div className="mb-8">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">{recipe.description}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">{recipe.cookTime} minutes</span>
              </div>

              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="font-medium">{recipe.servings} servings</span>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  recipe.difficulty === "Easy"
                    ? "bg-green-100 text-green-800"
                    : recipe.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {recipe.difficulty}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.instructions.map(
                  (instruction: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-500 text-white text-sm font-bold rounded-full mr-4 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
