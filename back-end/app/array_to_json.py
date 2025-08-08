import pandas as pd

def convert_list_to_json(values):
    keys = [
        "Gender", "Age", "Hemoglobin_g_dl", "Neutrophils_pct", "Lymphocytes_pct",
        "Monocytes_pct", "Eosinophils_pct", "RBC", "HCT_pct", "MCV_fl", "MCH_pg",
        "MCHC_g_dl", "RDW_CV_pct", "Total_Platelet_Count_cumm", "MPV_fl", "PDW_pct",
        "PCT_pct", "Total_WBC_count_cumm", "Result"
    ]
    
    if len(values) != len(keys):
        raise ValueError("Input list length must match number of fields")

    return dict(zip(keys, values))

def csv_to_json_objects():
    # Read the CSV file
    df = pd.read_csv('./data/updated_dengu_dataset.csv')

    # Convert each row into a list, then into JSON using your function
    json_objects = []
    for index, row in df.iterrows():
        row_list = row.tolist()
        try:
            json_obj = convert_list_to_json(row_list)
            json_objects.append(json_obj)
        except ValueError as e:
            print(f"❌ Row {index} skipped: {e}")

    return json_objects