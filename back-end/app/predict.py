from .model import stack_model
from .preprocess import preprocess_input, preprocess_df_input
import pandas as pd

def predict_dengue(data: dict):
    X = preprocess_input(data)
    prediction = stack_model.predict(X)[0]
    probability = stack_model.predict_proba(X)[0][1]
    return prediction, probability

def predict_df_dengue(df: pd.DataFrame):
    """
    Predict dengue status for a batch of input data (as DataFrame).
    Returns a list of (prediction, probability) tuples.
    """
    X = preprocess_df_input(df)
    
    # Predict labels and probabilities
    predictions = stack_model.predict(X)
    probabilities = stack_model.predict_proba(X)[:, 1]  # Probability of class 1 (positive)

    # Combine and return as list of tuples
    return predictions