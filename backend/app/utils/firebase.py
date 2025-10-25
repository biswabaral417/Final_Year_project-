import os
import firebase_admin
from firebase_admin import credentials, firestore

# Path to your key file
key_path = os.path.join(os.path.dirname(__file__), '../../heartdiseaseriskpred-firebase-adminsdk-fbsvc-09df5a8777.json')

# Initialize Firebase only once
if not firebase_admin._apps:
    cred = credentials.Certificate(key_path)
    firebase_admin.initialize_app(cred)

# Firestore database instance
db = firestore.client()
