from flask import Blueprint

#create a blueprint
hw_bp=Blueprint('hello_world',__name__)

@hw_bp.route('/hello_world') #  '@' is a decorator this is used to make routes yeah i know weird stuffs here
def hello_world ():  
    # this is a must have after decorater
    return "hello_world"
