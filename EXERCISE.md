# PR Review Exercise - Recipe Organizer

## Project Summary

This is a React Router 7 application designed as a base for a principal engineer PR review exercise. The application serves as a recipe organizer with basic CRUD functionality and modern React development patterns.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## 📁 Project Structure

```
recipe-organizer/
├── app/                          # Application source code
│   ├── components/               # Reusable UI components
│   │   ├── Header.tsx           # Navigation header
│   │   ├── RecipeCard.tsx       # Recipe display card
│   │   └── SearchBar.tsx        # Search input component
│   ├── routes/                  # Page components (React Router 7)
│   │   ├── home.tsx             # Homepage with featured recipes
│   │   ├── recipes.tsx          # All recipes listing
│   │   ├── recipes.new.tsx      # Add new recipe form
│   │   └── recipes.$recipeId.tsx # Individual recipe view
│   ├── styles/                  # Global styles
│   │   └── globals.css          # Tailwind CSS imports and custom styles
│   ├── types/                   # TypeScript type definitions
│   │   └── recipe.ts            # Recipe-related types
│   ├── test/                    # Test files and setup
│   ├── routes.ts                # Route configuration
│   └── root.tsx                 # Root application component
├── docs/
│   └── DEVELOPMENT.md           # Detailed development guide
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Exercise Objectives

This project is designed to evaluate a principal engineer candidate's ability to:

1. **Analyze existing code architecture** and identify improvement opportunities
2. **Make technical decisions** about scaling, performance, and maintainability
3. **Implement modern React patterns** and best practices
4. **Design scalable solutions** for data management and user experience
5. **Consider trade-offs** between different implementation approaches

## 🛠 Current Implementation

### Features Implemented

- ✅ Recipe listing with responsive grid layout
- ✅ Individual recipe detail pages
- ✅ Add new recipe form
- ✅ Basic search UI
- ✅ TypeScript throughout
- ✅ Tailwind CSS styling
- ✅ React Router 7 file-based routing

### Technical Stack

- **React Router 7**: Latest full-stack React framework
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first styling
- **Vite**: Build tool and development server
- **Vitest**: Testing framework

## 🎯 Areas for Enhancement

The application intentionally has several areas for improvement to facilitate meaningful technical discussion:

### 1. Data Persistence

- Currently uses mock data
- No state management
- No backend integration

### 2. Search & Filtering

- Search UI exists but not functional
- No filtering capabilities
- No sorting options

### 3. User Experience

- No loading states
- Limited error handling
- Basic form validation

### 4. Performance

- No optimization for large datasets
- No image optimization
- No lazy loading

### 5. Testing

- Minimal test coverage
- No integration tests
- No E2E tests

## 📋 Exercise Instructions

1. **Code Review**: Analyze the current codebase and identify areas for improvement
2. **Technical Discussion**: Discuss architecture decisions and trade-offs
3. **Implementation**: Choose 1-2 areas to improve and implement solutions
4. **Testing**: Add appropriate tests for your implementations
5. **Documentation**: Document your decisions and reasoning

## 🤔 Discussion Points

- How would you implement data persistence?
- What state management approach would you choose?
- How would you structure the application for multiple developers?
- What performance optimizations would you prioritize?
- How would you approach testing strategy?
- What accessibility improvements would you make?

## 📚 Resources

- [React Router 7 Documentation](https://reactrouter.com/dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Detailed development guide

## 🎉 Success Criteria

A successful completion of this exercise should demonstrate:

- **Technical expertise** in modern React development
- **Architectural thinking** about scalable solutions
- **Problem-solving skills** for real-world challenges
- **Communication skills** in explaining technical decisions
- **Code quality** standards and best practices

---

**Happy coding!** 🚀

This project provides a realistic foundation for technical discussion and hands-on implementation that reflects real-world development scenarios.
