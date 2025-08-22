import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

const sampleRecipes = [
  {
    title: "Classic Margherita Pizza",
    description: "A traditional Italian pizza with fresh tomatoes, mozzarella, and basil",
    cookTime: 30,
    servings: 4,
    difficulty: "Easy" as const,
    tags: ["Italian", "Vegetarian", "Quick"],
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "8 oz fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 475°F (245°C)",
      "Roll out pizza dough on a floured surface",
      "Spread tomato sauce evenly over dough",
      "Add torn mozzarella pieces",
      "Drizzle with olive oil",
      "Bake for 12-15 minutes until crust is golden",
      "Top with fresh basil before serving"
    ],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500"
  },
  {
    title: "Chicken Tikka Masala",
    description: "Creamy and flavorful Indian curry with tender chicken pieces",
    cookTime: 45,
    servings: 6,
    difficulty: "Medium" as const,
    tags: ["Indian", "Spicy", "Comfort Food"],
    ingredients: [
      "2 lbs chicken breast, cubed",
      "1 cup heavy cream",
      "1 can crushed tomatoes",
      "2 tbsp tikka masala spice blend",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 inch ginger, grated",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for 30 minutes",
      "Heat oil in a large pan and cook chicken until browned",
      "Remove chicken and sauté onions until soft",
      "Add garlic and ginger, cook for 1 minute",
      "Add tomatoes and spices, simmer for 10 minutes",
      "Return chicken to pan, add cream",
      "Simmer for 15 minutes until sauce thickens",
      "Garnish with cilantro and serve with rice"
    ],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500"
  },
  {
    title: "Chocolate Chip Cookies",
    description: "Classic homemade cookies that are crispy on the outside and chewy inside",
    cookTime: 25,
    servings: 24,
    difficulty: "Easy" as const,
    tags: ["Dessert", "Baking", "Kid-Friendly"],
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 cup butter, softened",
      "3/4 cup brown sugar",
      "1/2 cup white sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "1 tsp baking soda",
      "1 tsp salt",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Cream together butter and sugars",
      "Beat in eggs and vanilla",
      "Mix flour, baking soda, and salt in separate bowl",
      "Gradually combine wet and dry ingredients",
      "Stir in chocolate chips",
      "Drop rounded tablespoons on baking sheet",
      "Bake 9-11 minutes until golden brown"
    ],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500"
  },
  {
    title: "Beef Wellington",
    description: "An elegant dish featuring beef tenderloin wrapped in puff pastry",
    cookTime: 90,
    servings: 8,
    difficulty: "Hard" as const,
    tags: ["British", "Fancy", "Holiday"],
    ingredients: [
      "3 lb beef tenderloin",
      "1 lb puff pastry",
      "8 oz mushrooms, diced",
      "4 oz pâté",
      "8 thin slices prosciutto",
      "2 egg yolks",
      "2 tbsp Dijon mustard",
      "2 tbsp olive oil",
      "Salt and pepper",
      "Fresh thyme"
    ],
    instructions: [
      "Season beef and sear on all sides",
      "Brush with mustard and let cool",
      "Sauté mushrooms until moisture evaporates",
      "Lay prosciutto on plastic wrap",
      "Spread mushroom mixture over prosciutto",
      "Place beef on top and wrap tightly",
      "Chill for 30 minutes",
      "Wrap in puff pastry and brush with egg",
      "Bake at 400°F for 25-30 minutes"
    ],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500"
  },
  {
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with olives, feta, and crisp vegetables",
    cookTime: 15,
    servings: 4,
    difficulty: "Easy" as const,
    tags: ["Greek", "Healthy", "Vegetarian", "No-Cook"],
    ingredients: [
      "4 large tomatoes, chopped",
      "1 cucumber, sliced",
      "1 red onion, thinly sliced",
      "1/2 cup kalamata olives",
      "6 oz feta cheese, cubed",
      "1/4 cup olive oil",
      "2 tbsp red wine vinegar",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Chop tomatoes and place in large bowl",
      "Add sliced cucumber and red onion",
      "Add olives and feta cheese",
      "Whisk together oil, vinegar, and oregano",
      "Pour dressing over salad",
      "Season with salt and pepper",
      "Toss gently and serve immediately"
    ],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500"
  }
];

async function main() {
  console.log('🌱 Seeding database...');

  for (const recipe of sampleRecipes) {
    await prisma.recipe.create({
      data: recipe,
    });
  }

  console.log('✅ Database seeded successfully!');
  console.log(`📊 Created ${sampleRecipes.length} recipes`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
