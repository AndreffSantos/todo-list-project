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
	cursor = db.cursor()
	cursor.execute(query)
	result = cursor.fetchall()
	db.close()
	return result[0]
