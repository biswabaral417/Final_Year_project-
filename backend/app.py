from app import create_app




#create the flask app

app=create_app()

app.register_blueprint(user_bp)
app.register_blueprint(heart_bp)


if __name__ == '__main__':
    app.run(debug=True)