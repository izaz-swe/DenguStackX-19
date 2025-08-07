from fastapi import FastAPI
from .schemas import CSVPredictionResponse, PredictRequest, PredictResponse, BatchPredictRequest, BatchPredictResponse
from .predict import predict_dengue, predict_df_dengue
import pandas as pd
from .model import stack_model



app = FastAPI(title="DengueStackX-19 Predictor")

@app.get("/")
def heath():
    return { "message": "Health is ok!"}

@app.post("/predict", response_model=PredictResponse)
async def predict(request: PredictRequest):
    # Since predict_dengue is sync, call it in a thread pool executor (non-blocking)
    from asyncio import to_thread
    pred, prob = await to_thread(predict_dengue, request.dict())
    return PredictResponse(prediction=pred, probability=prob)


@app.post("/predict-batch", response_model=CSVPredictionResponse)
async def predict_batch(request: BatchPredictRequest):
    from asyncio import to_thread
    df = pd.DataFrame([item.dict() for item in request.data])
    results = await to_thread(predict_df_dengue, df)
    return {"predictions": results.tolist()}

@app.post("/predict-old", response_model=CSVPredictionResponse)
async def predict_batch():
    from asyncio import to_thread
    df = pd.read_csv('./data/X_test.csv')
    results = stack_model.predict(df)
    return {"predictions": results.tolist()}