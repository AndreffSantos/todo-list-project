import mysql.connector as DB


def conect():
	config = {
		'user': 'root',
		'password': 'password',
		'host': '127.0.0.1',
		'database': 'TOdo_DB',
		'raise_on_warnings': True
	}
	
	return DB.connect(**config)

def get_user(email: str, password: str):
	query = f'select * from users where email="{email}" and password="{password}";'
	db = conect()
	cursor = db.cursor(dictionary=True)
	cursor.execute(query)
	result = cursor.fetchone()
	db.close()
	return result

def insert_user(name: str, email: str, password: str):
	query = f'insert into users (name, email, password) values ("{name}", "{email}", "{password}")'
	db = conect()
	cursor = db.cursor(dictionary=True)
	cursor.execute(query)
	db.commit()

def get_tasks_by_user(id: int):
	query = f'select * from tasks where user_id={id}'
	db = conect()
	cursor = db.cursor(dictionary=True)
	cursor.execute(query)
	result = cursor.fetchall()
	db.close()
	return result

def insert_task(id: str, description: str):
	query = f'insert into tasks (user_id, description) values ("{id}", "{description}")'
	db = conect()
	cursor = db.cursor(dictionary=True)
	cursor.execute(query)
	db.commit()
	db.close()
	