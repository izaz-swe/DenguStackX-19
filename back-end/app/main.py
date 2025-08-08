from fastapi import FastAPI, HTTPException, Query
from .schemas import CSVPredictionResponse, PredictRequest, PredictResponse, BatchPredictRequest, BatchPredictResponse, ArrayInput
from .predict import predict_dengue, predict_df_dengue
import pandas as pd
from .model import stack_model
from .array_to_json import convert_list_to_json, csv_to_json_objects
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="DengueStackX-19 Predictor")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ✅ React dev server origin
    allow_credentials=True,
    allow_methods=["*"],                      # or specify: ["POST", "GET"]
    allow_headers=["*"],
)


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


@app.post("/json")
async def convert_array(data: ArrayInput):
    try:
        result = convert_list_to_json(data.data)
        return result
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    
@app.post("/csv")
async def convert_csv(start: int = Query(0), end: int = Query(10)):
    try:
        # Load all JSON objects from CSV
        result = csv_to_json_objects()  # pass your actual path

        # Validate range
        if start < 0 or end > len(result) or start >= end:
            raise ValueError(f"Invalid range: start={start}, end={end}")

        return result[start:end]

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
