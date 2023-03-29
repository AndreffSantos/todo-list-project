import re


def valid_email(email: str):
	if not bool(re.search('\w+@+\w+.com', email)):
		raise ValueError('formato do email invalido')
	return True

def valid_password(password: str):
	if not bool(re.search('[\w\W]{6}', password)):
		raise ValueError('SENHA INVALIDA')
	return True