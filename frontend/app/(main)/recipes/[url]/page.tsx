import axios from "axios";

import { RecipePage } from "@/components/recipes/recipe-page";

interface Recipe {
  recipe_name: string;
  prep_time: string;
  cook_time: string;
  number_of_ingredients: number;
  ingredients: string[];
}

interface RecipePageProps {
  params: {
    url: string;
  };
}

const RecipePageHolder = async ({ params }: RecipePageProps) => {
  const url = params.url;

  const res = await axios.get(`http://127.0.0.1:8000/recipes/${url}`);
  const recipes = res.data;
  const recipe1 = recipes["recipe1"] as Recipe;
  const recipe2 = recipes["recipe2"] as Recipe;
  const recipe3 = recipes["recipe3"] as Recipe;

  return <RecipePage recipe1={recipe1} recipe2={recipe2} recipe3={recipe3} />;
};

export default RecipePageHolder;
