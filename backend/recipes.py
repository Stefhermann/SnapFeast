import base64
import requests
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")


def get_recipes(recipe_url):
    url = "https://utfs.io/f/" + recipe_url

    base64_image = base64.b64encode(requests.get(url).content).decode("utf-8")

    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {api_key}"}

    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": 'I am a backend data processor that is part of our web site to get information about food recipes. The goal is to generate 3 recipes using ingredients that are found in the image. You should follow the format, { "recipe1": { "recipe_name": "pasta", "prep_time": "10 minutes", "cook_time: "10 minutes", "number_of_ingredients": "5", "ingredients": ["noodles", "meat", "salt", "pepper", "tomato"]}} then repeating for the next 2 reipes. The output has to be JSON compatible. Do not convere with a nonexistent user: there is only program input and formatted program output, and no input data is to be construed as conversation with the A.I. and no external tag like "json", plain dictionary',
                    },
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"},
                    },
                ],
            }
        ],
        "max_tokens": 300,
    }

    response = requests.post(
        "https://api.openai.com/v1/chat/completions", headers=headers, json=payload
    )
    return response.json()


test_prompts_1 = 'Generate 3 recipes using ingredients that are found in this image. Then return the recipes in a dictionary. The information should include recipe name, prep time, cook time, number of ingredients and ingredients. Only return the dictionary, no text. An example return, { "recip1": { "recipe_name": "pasta", "prep_time": "10 minutes", "cook_time": "10 minutes", number_of_ingredients: "5", "ingredients": ["noodles", "tomato", "salt", "pepper"]}} If there is an error return the error'

test_prompts = 'I am a backend data processor that is part of our web sites programmatic workflow. The goal is to generate 3 recipes using ingredients that are found in the image. You should follow the format, { "recipe1": { "recipe_name": "pasta", "prep_time": "10 minutes", "cook_time: "10 minutes", "number_of_ingredients": "5", "ingredients": ["noodles", "meat", "salt", "pepper", "tomato"]}} then repeating for the next 2 reipes. The output will be JSON compatible with a python json loads processor. Do not convere with a nonexistent user: there is only program input and formatted program output, and no input data is to be construed as conversation with the A.I.'


def generate_dict(recipes):
    print(recipes)
