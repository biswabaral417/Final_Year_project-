from firebase_admin import auth
from flask import request, jsonify

def verify_firebase_token():
    token = request.headers.get("Authorization")
    if not token:
        return None, jsonify({"error": "Missing token"}), 401
    try:
        decoded = auth.verify_id_token(token)
        return decoded["uid"], None, None
    except Exception as e:
        return None, jsonify({"error": str(e)}), 401
