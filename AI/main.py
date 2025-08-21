# main.py
from utils import load_data, preprocess
from train import train_xgboost, train_rf, train_lr

def main():
    data = load_data("./data/raw/cardio_train.csv")
    X_train, X_test, y_train, y_test = preprocess(data)

    print("Training XGBoost...")
    xgb_model, xgb_metrics = train_xgboost(X_train, y_train, X_test, y_test)
    print("XGBoost:", xgb_metrics)

    print("Training Random Forest...")
    rf_model, rf_metrics = train_rf(X_train, y_train, X_test, y_test)
    print("Random Forest:", rf_metrics)

    print("Training Logistic Regression...")
    lr_model, lr_metrics = train_lr(X_train, y_train, X_test, y_test)
    print("Logistic Regression:", lr_metrics)

if __name__ == "__main__":
    main()
