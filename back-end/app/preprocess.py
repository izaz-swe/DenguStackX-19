import numpy as np
import pandas as pd
from .model import scaler, label_encoder

def preprocess_input(data: dict) -> np.ndarray:
    df = pd.DataFrame([data])

    # Label encode gender if present
    if 'Gender' in df.columns:
        df['Gender'] = label_encoder.fit_transform(df['Gender'])

    # Scale
    return scaler.fit_transform(df)

def preprocess_df_input(df: pd.DataFrame) -> np.ndarray:
    """
    Preprocess a DataFrame of inputs for model prediction.
    Assumes all required columns are present, including 'Gender'.
    Returns a NumPy array after encoding and scaling.
    """
    df = df.copy()  # Avoid modifying the original DataFrame

    # Encode 'Gender' using pre-trained label encoder
    if 'Gender' in df.columns:
        df['Gender'] = label_encoder.fit_transform(df['Gender'])

    # Apply scaling using pre-trained scaler
    return scaler.fit_transform(df)