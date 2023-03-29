from flask import Flask, request, json
from validators.validator import valid_email, valid_password
from db.DB import get_user
from helpers.JWT import token

app = Flask(__name__)

@app.post("/login")
def login():
    user = request.json
    # Validação de formato de email
    valid_email(user['email'])
    # Valida se a senha tem no minimo 6 caracteres
    valid_password(user['password'])

    user_data = get_user(user['email'], user['password'])

    payload = {
        'user_id': user_data[0],
        'name': user_data[1],
        'email': user_data[2],
    }

    data = {
        'token': token(payload)
    }

    return app.response_class(
        response=json.dumps(data),
        status=200,
    )
