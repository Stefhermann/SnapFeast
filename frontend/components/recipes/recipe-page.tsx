"use client";

import { RecipeItems } from "@/components/recipes/recipe-items";
import { Blob } from "@/components/blob";

interface Recipe {
  recipe_name: string;
  prep_time: string;
  cook_time: string;
  number_of_ingredients: number;
  ingredients: string[];
}

interface RecipePageProps {
  recipe1: Recipe;
  recipe2: Recipe;
  recipe3: Recipe;
}

export const RecipePage = ({ recipe1, recipe2, recipe3 }: RecipePageProps) => {
  return (
    <main className="dark:bg-slate-950">
      <h1 className="text-6xl font-bold text-center mt-96">Recipes</h1>
      <div className="absolute right-0 top-16 ">
        <Blob />
      </div>
      <div className="absolute left-0">
        <Blob color="blue" />
      </div>
      <div className="flex px-[20px] absolute top-[500px] w-full justify-center">
        <RecipeItems recipe={recipe1} />
        <br />
        <RecipeItems recipe={recipe2} />
        <br />
        <RecipeItems recipe={recipe3} />
      </div>
    </main>
  );
};
