import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Recipe Organizer
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              All Recipes
            </Link>
            <Link
              to="/recipes/new"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Add Recipe
            </Link>
          </div>

          {/* Mobile menu button - would need state management for functionality */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
