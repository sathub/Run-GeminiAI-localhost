from google import genai

client  = genai.Client(api_key="********Replace with your Google API**********")

prompt = input("Enter your query : ")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=prompt
)

print("The response is --- ")
print("*****************")
print("*****************")
print(response.text)
