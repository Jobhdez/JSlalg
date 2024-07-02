import requests
import json

BASE_URL = "http://localhost:3000"

def register_user(username, password):
    url = f"{BASE_URL}/api/register"
    payload = {
        "username": username,
        "password": password
    }
    response = requests.post(url, json=payload)
    return response.json()

def login_user(username, password):
    url = f"{BASE_URL}/api/login"
    payload = {
        "username": username,
        "password": password
    }
    response = requests.post(url, json=payload)
    return response.json()

def add_vectors(token, exp, exp2):
    url = f"{BASE_URL}/api/vectors/add"
    headers = {
        "Authorization": f"Bearer {token}"
    }
    payload = {
        "exp": json.dumps(exp),
        "exp2": json.dumps(exp2)
    }
    response = requests.post(url, json=payload, headers=headers)
    return response.json()

# Register user "joker" with password "hello123"
register_response = register_user("joker", "hello123")
print("Register response:", register_response)

# Login user "joker" to get the token
login_response = login_user("joker", "hello123")
print("Login response:", login_response)

# Extract the token
token = login_response.get("token")

if token:
    # Call /api/vectors/add
    exp1 = [1, 2, 3]  # Example vector 1
    exp2 = [4, 5, 6]  # Example vector 2
    add_vectors_response = add_vectors(token, exp1, exp2)
    print("Add vectors response:", add_vectors_response)
else:
    print("Login failed, cannot call /api/vectors/add")
