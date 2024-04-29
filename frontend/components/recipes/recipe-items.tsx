"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Recipe {
  recipe_name: string;
  prep_time: string;
  cook_time: string;
  number_of_ingredients: number;
  ingredients: string[];
}

interface RecipeItemsProps {
  recipe: Recipe;
}

export const RecipeItems = ({ recipe }: RecipeItemsProps) => {
  return (
    <Card className="w-[380px] h-[600px] text-xl text-center px-20">
      <CardHeader>
        <CardTitle>{recipe.recipe_name}</CardTitle>
        <CardDescription>about this recipe</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Prep Time: {recipe.prep_time}</p>
        <p>Cook Time: {recipe.cook_time}</p>
        <p>Number of Ingredients: {recipe.number_of_ingredients}</p>
        <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      </CardContent>
    </Card>
  );
};
