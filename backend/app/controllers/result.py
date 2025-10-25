import pickle
from app.utils.classifyRisk import classifyRisk
import numpy as np

# Load model once (outside functions to improve performance)
with open("xgboost_model.pkl", "rb") as f:
    model = pickle.load(f)

def calculate_heart_risk(data):
    """
    data = {
        "age": 25,
        "gender": 1,   # or 0
        "cp": 1,
        "trestbps": 120,
        "chol": 180,
        "fbs": 0,
        "restecg": 1,
        "thalach": 150,
        "exang": 0,
        "oldpeak": 1.0,
        "slope": 2,
        "ca": 0,
        "thal": 2
    }
    """

    features_list = [
        data["age"], data["gender"], data["cp"], data["trestbps"],
        data["chol"], data["fbs"], data["restecg"], data["thalach"],
        data["exang"], data["oldpeak"], data["slope"],
        data["ca"], data["thal"]
    ]

    np_array = np.array([features_list])

    # Predict probability for heart disease
    prob = model.predict_proba(np_array)[0][1]  # [1] = positive class risk

    # Convert probability to label
    risk_label = classifyRisk(prob)

    result = {
        "risk_probability": round(prob * 100, 2),  # %
        "risk_level": risk_label
    }
    return result
