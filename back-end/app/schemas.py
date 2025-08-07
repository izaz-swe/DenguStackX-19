from pydantic import BaseModel
from typing import Literal, List

class PredictRequest(BaseModel):
    Gender: Literal['Male', 'Female']
    Age: int
    Hemoglobin_g_dl: float
    Neutrophils_pct: int
    Lymphocytes_pct: int
    Monocytes_pct: int
    Eosinophils_pct: int
    RBC: int
    HCT_pct: float
    MCV_fl: float
    MCH_pg: float
    MCHC_g_dl: float
    RDW_CV_pct: float
    Total_Platelet_Count_cumm: int
    MPV_fl: float
    PDW_pct: float
    PCT_pct: float
    Total_WBC_count_cumm: int

class PredictResponse(BaseModel):
    prediction: int
    probability: float

class BatchPredictRequest(BaseModel):
    data: List[PredictRequest]

class BatchPredictResponse(BaseModel):
    results: List[PredictResponse]

class CSVPredictionResponse(BaseModel):
    predictions: List[float]