    # config.py

RANDOM_STATE = 42
TEST_SIZE = 0.2

# Model Hyperparameters
XGB_PARAMS = {
    "n_estimators": 300,
    "max_depth": 3,
    "learning_rate": 0.04,
    "subsample": 0.8,
    "colsample_bytree": 0.8,
    "eval_metric": "logloss"
}

RF_PARAMS = {
    "n_estimators": 200,
    "max_depth": 6,
    "random_state": RANDOM_STATE
}

LR_PARAMS = {
    "max_iter": 1000
}
