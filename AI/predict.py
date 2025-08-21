# predict.py
import joblib
import numpy as np

def predict(model_path, X_input):
    model = joblib.load(model_path)
    return model.predict(np.array(X_input).reshape(1, -1))[0]
