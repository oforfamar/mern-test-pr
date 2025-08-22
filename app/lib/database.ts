/**
 * Database utilities for development and production
 */

export const DATABASE_CONFIG = {
  development: {
    provider: 'mongodb',
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/recipe_organizer',
  },
  production: {
    provider: 'mongodb',
    url: process.env.DATABASE_URL,
  },
  test: {
    provider: 'mongodb',
    url: process.env.TEST_DATABASE_URL || 'mongodb://localhost:27017/recipe_organizer_test',
  },
};

/**
 * Get database configuration based on environment
 */
export function getDatabaseConfig() {
  const env = process.env.NODE_ENV || "development";
  return (
    DATABASE_CONFIG[env as keyof typeof DATABASE_CONFIG] ||
    DATABASE_CONFIG.development
  );
}

/**
 * Validate database connection
 */
export async function validateDatabaseConnection() {
  try {
    const { prisma } = await import("./db.server.js");
    await prisma.$connect();
    console.log("✅ Database connection successful");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}

/**
 * Check if database is ready (tables exist)
 */
export async function isDatabaseReady() {
  try {
    const { prisma } = await import("./db.server.js");
    await prisma.recipe.count();
    return true;
  } catch (error) {
    console.log("📦 Database not ready, tables may need to be created");
    return false;
  }
}
