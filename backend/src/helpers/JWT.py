import jwt
from dotenv import load_dotenv, dotenv_values

load_dotenv()
env = dotenv_values('.env')

def encode(payload: dict):
    return jwt.encode(payload, env['SECRET'], headers={ 'alg': 'HS256', 'exp': 1 })

def decode(token: str):
    return jwt.decode(token, env['SECRET'], algorithms=['HS256'])