import { Form, redirect } from "react-router";
import { Header } from "@/components/Header";
import type { ActionFunctionArgs, MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Add New Recipe - Recipe Organizer" },
    { name: "description", content: "Add a new recipe to your collection" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // In a real app, you would save this to a database
  const recipe = {
    title: formData.get("title"),
    description: formData.get("description"),
    cookTime: Number(formData.get("cookTime")),
    servings: Number(formData.get("servings")),
    difficulty: formData.get("difficulty"),
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
    tags:
      formData
        .get("tags")
        ?.toString()
        .split(",")
        .map((tag: string) => tag.trim()) || [],
  };

  console.log("New recipe:", recipe);

  // Redirect to recipes page after successful creation
  return redirect("/recipes");
}

export default function NewRecipe() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Add New Recipe
          </h1>

          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter recipe title"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Brief description of the recipe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="cookTime"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Cook Time (minutes)
                </label>
                <input
                  type="number"
                  id="cookTime"
                  name="cookTime"
                  min="1"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="servings"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Servings
                </label>
                <input
                  type="number"
                  id="servings"
                  name="servings"
                  min="1"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  name="difficulty"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="ingredients"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ingredients
              </label>
              <textarea
                id="ingredients"
                name="ingredients"
                rows={6}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="List ingredients, one per line"
              />
            </div>

            <div>
              <label
                htmlFor="instructions"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={8}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Step-by-step cooking instructions"
              />
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="e.g. Italian, Pasta, Quick"
              />
            </div>

            <div className="flex space-x-4">
              <button type="submit" className="btn btn-primary">
                Save Recipe
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </Form>
        </div>
      </main>
    </div>
  );
}
