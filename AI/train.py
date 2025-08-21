# train.py
import xgboost as xgb
import joblib
import os
import onnxmltools
from onnxmltools.convert.common.data_types import FloatTensorType  # ✅ use this one
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from utils import evaluate_model
from config import XGB_PARAMS, RF_PARAMS, LR_PARAMS

# Ensure models folder exists
os.makedirs("models", exist_ok=True)

def train_xgboost(X_train, y_train, X_test, y_test):
    model = xgb.XGBClassifier(**XGB_PARAMS)
    model.fit(X_train, y_train)
    
    metrics = evaluate_model(model, X_test, y_test)
    
    # Save as pickle
    joblib.dump(model, "models/xgboost.pkl")
    
    # Convert to ONNX
    initial_type = [('float_input', FloatTensorType([None, X_train.shape[1]]))]
    onnx_model = onnxmltools.convert_xgboost(model, initial_types=initial_type)
    
    with open("models/xgboost.onnx", "wb") as f:
        f.write(onnx_model.SerializeToString())
    
    return model, metrics



def train_rf(X_train, y_train, X_test, y_test):
    model = RandomForestClassifier(**RF_PARAMS)
    model.fit(X_train, y_train)

    metrics = evaluate_model(model, X_test, y_test)

    joblib.dump(model, "models/rf.pkl")

    # Optional: convert RF to ONNX


    return model, metrics


def train_lr(X_train, y_train, X_test, y_test):
    model = LogisticRegression(**LR_PARAMS)
    model.fit(X_train, y_train)

    metrics = evaluate_model(model, X_test, y_test)

    joblib.dump(model, "models/lr.pkl")



    return model, metrics
