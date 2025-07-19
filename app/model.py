import joblib
import os
import logging

# Set up logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

# Model directory path
MODEL_DIR = os.path.join(os.path.dirname(__file__), '..', 'models')

# Helper function to safely load a joblib model
def load_model(filename):
    path = os.path.join(MODEL_DIR, filename)
    try:
        model = joblib.load(path)
        logger.info(f"Loaded: {filename}")
        return model
    except FileNotFoundError:
        logger.error(f"{filename} not found in {MODEL_DIR}")
    except Exception as e:
        logger.error(f"Error loading {filename}: {e}")
    return None

# Load models with safety
stack_model = load_model("DengueStackX-19.pkl")
scaler = load_model("scaler.pkl")
label_encoder = load_model("label_encoder.pkl")
