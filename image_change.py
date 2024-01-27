import os
import openai 

openai.api_key = "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"
PROMPT = "a flat earth"
response = openai.images.generate(
    model="dall-e-3",
    prompt= PROMPT,
    size="1024x1024",
    quality="standard",
    n=1,
)

url = response.data[0].url
print(url)