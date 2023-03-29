import jwt
from dotenv import load_dotenv, dotenv_values

load_dotenv()
env = dotenv_values('.env')

def token(payload: dict):
    return jwt.encode(payload, env['SECRET'], algorithm='HS256')