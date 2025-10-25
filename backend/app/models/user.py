from firebase_admin import firestore
from datetime import datetime

db = firestore.client()


class UserModel:
    
    @staticmethod
    def create_user(uid, data):
        """Create a new user profile"""
        user_doc = {
            "uid": uid,
            "name": data.get("name"),
            "phone": data.get("phone"),
            "age": data.get("age"),
            "gender": data.get("gender"),
            "createdAt": datetime.utcnow(),
            "heartData": []  # start empty
        }
        db.collection("users").document(uid).set(user_doc)
        return user_doc

    @staticmethod
    def get_user(uid):
        """Fetch user profile fields"""
        doc = db.collection("users").document(uid).get()
        return doc.to_dict() if doc.exists else None

    @staticmethod
    def update_user(uid, data):
        """Update profile fields"""
        db.collection("users").document(uid).update(data)
        return True

    @staticmethod
    def add_heart_data(uid, heart_obj):
        """Add new heart check record"""
        heart_obj["createdAt"] = datetime.utcnow()
        db.collection("users").document(uid).update({
            "heartData": firestore.ArrayUnion([heart_obj])
        })
        return heart_obj
