import requests

API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/02c80627fc67f8dd0b82b024c5c96601/ai/run/"
headers = {"Authorization": BEARER TOKEN }

def run(model, inputs):
    input = { "messages": inputs }
    response = requests.post(f"{API_BASE_URL}{model}", headers=headers, json=input)
    return response.json()

inputs = [
    { "role": "system", "content": "You are a friendly assistant that helps write stories" },
    { "role": "user", "content": "Write a short story about a llama that goes on a journey to find an orange cloud"}
];
output = run("@cf/meta/llama-2-7b-chat-int8", inputs)
print(output)
