from fastapi import FastAPI
from pydantic import BaseModel
from recipes import get_recipes
import json

app = FastAPI()


class Data(BaseModel):
    url: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/recipes/{recipe_url}")
def read_recipe(recipe_url) -> dict:
    print(recipe_url)
    recipes = get_recipes(recipe_url)
    recipe_out = recipes["choices"][0]["message"]["content"]
    if recipe_out == "Error":
        return {"Error": "Error"}
    print(recipe_out)
    try:
        recipe_dict = json.loads(recipe_out)
        return recipe_dict
    except Exception as e:
        print(e)
        return {"Error": "Error"}
