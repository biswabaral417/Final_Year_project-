# utils.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score
from sklearn.metrics import classification_report, confusion_matrix, ConfusionMatrixDisplay


from config import TEST_SIZE, RANDOM_STATE

def load_data(path):
    return pd.read_csv(path)

def preprocess(data, target_col="cardio"):
    X = data.drop(columns=[target_col])
    y = data[target_col]

    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    return train_test_split(X_scaled, y, test_size=TEST_SIZE, random_state=RANDOM_STATE)

def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    mod_res(model, X_test, y_test)
    return {
        "accuracy": accuracy_score(y_test, y_pred),
        "f1": f1_score(y_test, y_pred),
        "roc_auc": roc_auc_score(y_test, y_pred)
    }

def mod_res(model, X_test, y_test):
    y_pred = model.predict(X_test)
    
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))

    cm = confusion_matrix(y_test, y_pred)
    disp = ConfusionMatrixDisplay(confusion_matrix=cm)
    disp.plot()