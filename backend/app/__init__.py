from flask import Flask

def create_app():
    app = Flask(__name__)
    
    # Import controllers
    from app.controllers.hello_world import hw_bp
    
    # Register blueprints
    app.register_blueprint(hw_bp)
    
    return app
