# Database Setup Guide

This project uses Prisma ORM with PostgreSQL for data persistence.

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.example` to `.env` and update the `DATABASE_URL`:
   ```bash
   cp .env.example .env
   ```

3. **Choose your database option**:

### Option 1: Local PostgreSQL (Recommended for development)

1. Install PostgreSQL locally
2. Create a database:
   ```sql
   CREATE DATABASE recipe_organizer;
   ```
3. Update your `.env` file:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/recipe_organizer"
   ```

### Option 2: Cloud Database (Recommended for production)

Choose one of these cloud providers:

- **Supabase** (Free tier available): https://supabase.com/
- **Railway** (Free tier available): https://railway.app/
- **Neon** (Free tier available): https://neon.tech/
- **PlanetScale** (MySQL): https://planetscale.com/

Update your `.env` file with the connection string provided by your chosen service.

## Database Operations

### Generate Prisma Client
```bash
npm run db:generate
```

### Push schema to database (for development)
```bash
npm run db:push
```

### Create and run migrations (for production)
```bash
npm run db:migrate
```

### Seed the database with sample data
```bash
npm run db:seed
```

### Open Prisma Studio (Database GUI)
```bash
npm run db:studio
```

## Schema Overview

### Recipe Model
- `id`: Unique identifier (CUID)
- `title`: Recipe name
- `description`: Brief description
- `cookTime`: Cooking time in minutes
- `servings`: Number of servings
- `image`: Optional image URL
- `difficulty`: Easy, Medium, or Hard
- `tags`: Array of tags for categorization
- `ingredients`: Array of ingredients
- `instructions`: Array of cooking steps
- `createdAt`: Timestamp of creation
- `updatedAt`: Timestamp of last update

## Service Layer

The `RecipeService` class provides methods for:

- `getRecipes(filters?)`: Get all recipes with optional filtering
- `getRecipeById(id)`: Get a single recipe
- `createRecipe(newRecipe)`: Create a new recipe
- `updateRecipe(id, updateData)`: Update an existing recipe
- `deleteRecipe(id)`: Delete a recipe
- `getAllTags()`: Get all unique tags
- `getRecipeStats()`: Get recipe statistics

## Development Workflow

1. Make schema changes in `prisma/schema.prisma`
2. Generate the client: `npm run db:generate`
3. Push changes to dev database: `npm run db:push`
4. Test your changes
5. Create migration when ready: `npm run db:migrate`

## Production Deployment

1. Set `DATABASE_URL` environment variable
2. Run migrations: `npx prisma migrate deploy`
3. Generate client: `npx prisma generate`
4. Optionally seed: `npm run db:seed`

## Troubleshooting

### Connection Issues
- Ensure your database server is running
- Check your `DATABASE_URL` format
- Verify firewall/network settings for cloud databases

### Migration Issues
- Use `npx prisma db push` for development
- Use `npx prisma migrate reset` to reset development database
- Use `npx prisma migrate resolve` to mark migrations as applied

### Client Generation Issues
- Run `npm run db:generate` after schema changes
- Restart your development server after generating client
