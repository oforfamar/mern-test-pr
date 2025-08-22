# Recipe Organizer

A modern recipe organizer application built with React Router 7 and TypeScript. This project serves as a base for a principal engineer PR review exercise.

## Features

- 📝 View all recipes in a clean, organized interface
- ➕ Add new recipes with detailed information
- 🔍 Search functionality for finding specific recipes
- 📱 Responsive design for all device sizes
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite

## Tech Stack

- **React Router 7** - Modern full-stack React framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd recipe-organizer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── RecipeCard.tsx  # Recipe display card
│   └── SearchBar.tsx   # Search input component
├── routes/             # Route components (pages)
│   ├── home.tsx        # Homepage with featured recipes
│   ├── recipes.tsx     # All recipes listing
│   ├── recipes.new.tsx # Add new recipe form
│   └── recipes.$recipeId.tsx # Individual recipe view
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports and custom styles
└── root.tsx           # Root application component
```

## Features for PR Review Exercise

This application provides a solid foundation with several areas for potential improvement and extension:

### Current Implementation

- Basic CRUD operations for recipes
- Simple responsive design
- Mock data implementation
- TypeScript types for type safety

### Areas for Enhancement

- **Data Persistence**: Currently uses mock data - could be improved with local storage, database integration, or API connections
- **State Management**: Simple component state - could benefit from global state management
- **Search & Filtering**: Basic search functionality - could be enhanced with advanced filtering
- **Testing**: Minimal test coverage - extensive testing could be added
- **Performance**: Basic implementation - could be optimized for larger datasets
- **Accessibility**: Basic accessibility - could be improved for better screen reader support
- **Error Handling**: Basic error handling - could be more comprehensive
- **User Experience**: Basic UX - could include features like favorites, ratings, categories

## Design Decisions

### React Router 7

- Chosen for its modern approach to full-stack React applications
- File-based routing provides clear structure
- Built-in data loading and form handling

### TypeScript

- Provides type safety and better developer experience
- Interfaces defined for Recipe data structure
- Proper typing for component props

### Tailwind CSS

- Utility-first approach for rapid UI development
- Responsive design capabilities
- Custom theme configuration for brand colors

### Component Architecture

- Separation of concerns with dedicated components
- Reusable components for consistent UI
- Props interfaces for type safety

## Contributing

This project is designed for evaluation purposes. When contributing or reviewing:

1. Consider the architectural decisions and their trade-offs
2. Evaluate code quality, readability, and maintainability
3. Look for opportunities to improve performance and user experience
4. Consider scalability and future feature additions

## License

MIT License - see LICENSE file for details
