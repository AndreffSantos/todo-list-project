from flask import Flask, json, request
from flask_cors import CORS
from validators.validator import valid_email, valid_password
from db.DB import get_user, get_tasks_by_user, insert_user, insert_task
from helpers.JWT import encode, decode

app = Flask(__name__)
CORS(app)

@app.post("/login")
def login():
    user = request.json
    # Validação de formato de email
    valid_email(user['email'])
    # Valida se a senha tem no minimo 6 caracteres
    valid_password(user['password'])

    user_data = get_user(user['email'], user['password'])

    payload = {
        'user_id': user_data['user_id'],
        'name': user_data['name'],
        'email': user_data['email'],
    }

    data = {
        'token': encode(payload)
    }

    return app.response_class(
        response=json.dumps(data),
        status=200,
    )

@app.post('/user')
def new_user():
    new_user = request.json
    valid_email(new_user['email'])
    valid_password(new_user['password'])

    insert_user(new_user['name'], new_user['email'], new_user['password'])

    return app.response_class(
        json.dumps({
            'message': 'Novo usuario cadastrado'
        }),
        201
    )

@app.route('/tasks', methods = ['GET', 'POST'])
def tasks():
    if request.method == 'GET':
        id = decode(request.headers['Authorization'])['user_id']
        tasks = [task['description'] for task in get_tasks_by_user(id)]
        return tasks
    if request.method == 'POST':
        id = decode(request.headers['Authorization'])['user_id']
        description = request.json['description']

        insert_task(id, description)
        return app.response_class(
            json.dumps({
                'message': 'Tarefa cadastrada'
            }),
            201
        )
