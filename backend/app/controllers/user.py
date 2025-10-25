from flask import Blueprint, request, jsonify
from app.models.user_model import UserModel
from app.middleware.auth_middleware import verify_firebase_token

user_bp = Blueprint('user', __name__, url_prefix='/user')

@user_bp.route('/getProfile', methods=['GET'])
def get_profile():
    uid, error, code = verify_firebase_token()
    if error:
        return error, code
    user = UserModel.get_user(uid)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"user": user})

@user_bp.route('/updateProfile', methods=['PATCH'])
def update_profile():
    uid, error, code = verify_firebase_token()
    if error:
        return error, code
    data = request.json
    UserModel.update_user(uid, data)
    return jsonify({"message": "Profile updated"})
