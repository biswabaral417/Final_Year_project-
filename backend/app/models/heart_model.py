from firebase_admin import firestore
from datetime import datetime

db = firestore.client()

class HeartDataModel:
    @staticmethod
    def create_heart_data(uid, heart_metrics, result=None):
        """
        Add a new heart record to a user
        uid: user's UID
        heart_metrics: dict containing ap_hi, ap_lo, weight, etc.
        result: optional prediction
        """
        record = {
            "id": firestore.client().collection("heartData").document().id,  # generate unique id
            "createdAt": datetime.utcnow(),
            "heartMetrics": heart_metrics,
            "result": result
        }
        # Add to user's heartData array
        db.collection("users").document(uid).update({
            "heartData": firestore.ArrayUnion([record])
        })
        return record

    @staticmethod
def update_heart_record(uid, updated_record):
    """
    Replace the old heart record with updated one
    Firestore doesn't let you update array elements directly, so we:
    Remove old record
     Add updated record
    """
    db.collection("users").document(uid).update({
        "heartData": firestore.ArrayRemove([r for r in HeartDataModel.get_heart_history(uid) if r["id"] == updated_record["id"]])
    })
    db.collection("users").document(uid).update({
        "heartData": firestore.ArrayUnion([updated_record])
    })
    return updated_record


    @staticmethod
    def get_heart_history(uid):
        """Return all heart records for a user"""
        doc = db.collection("users").document(uid).get()
        if doc.exists:
            return doc.to_dict().get("heartData", [])
        return []

    @staticmethod
    def get_latest_heart(uid):
        """Return the latest heart record"""
        records = HeartDataModel.get_heart_history(uid)
        if not records:
            return None
        # Sort by createdAt descending
        records.sort(key=lambda x: x["createdAt"], reverse=True)
        return records[0]
