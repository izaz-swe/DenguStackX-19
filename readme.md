# An Interpretable Machine Learning Model for Dengue Detection with Clinical Hematological Data

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688.svg)](https://fastapi.tiangolo.com/)

> **An advanced web-based platform for dengue fever prediction using machine learning models trained on clinical hematological data**

## 📋 Table of Contents

- [Overview](#-overview)
- [Methodology](#-methodology)
- [Model Architecture](#-model-architecture)
- [Features](#-features)
- [Dataset Information](#-dataset-information)
- [Model Performance](#-model-performance)
- [System Architecture](#️-system-architecture)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Web Interface](#️-web-interface)
- [Model Development](#-model-development)
- [Evaluation Metrics](#-evaluation-metrics)
- [Contributing](#-contributing)
- [Citation](#-citation)
- [Authors](#-authors)
- [License](#-license)

## 🔬 Overview

DengueStackX-19 is a comprehensive machine learning framework designed for early dengue fever detection using clinical hematological parameters. This research implements and compares multiple ML algorithms with various data balancing techniques to achieve optimal prediction accuracy.

## 🧬 Methodology

![Research Diagram](images/Research%20Diagram.jpg)

Our research methodology follows a systematic approach combining clinical data analysis with advanced machine learning techniques. The framework integrates multiple data balancing strategies with ensemble learning to achieve optimal dengue prediction accuracy. This comprehensive pipeline ensures robust model validation through cross-validation and clinical relevance assessment.

## ⚙️ Model Architecture
![DengueStackX-19 Architecture](images/DengueStackX-19%20Architecture.jpg)

The DengueStackX-19 framework implements a comprehensive three-tier architecture integrating data preprocessing, machine learning model training, and web-based deployment. This scalable design ensures seamless integration between the FastAPI backend, React frontend, and trained ML models for real-time clinical decision support.


### Key Research Contributions

-**Comprehensive Algorithm Comparison**: Evaluation of 7 machine learning algorithms including traditional ML and deep learning approaches
-**Data Balancing Analysis**: Implementation of 6 different balancing techniques (SMOTE, ADASYN, SMOTEENN, SMOTETomek, Tomek Links)
-**Clinical Validation**: Analysis of 1,523 patient records with 19 hematological and demographic features
-**Web-based Deployment**: Real-time prediction interface for healthcare professionals
-**Explainable AI**: Model interpretability features for clinical decision support

### 🎯 Research Objective

The primary goal is to develop an accurate, interpretable, and accessible machine learning model for dengue prediction that can assist healthcare professionals in early diagnosis, particularly in resource-limited settings.

## ✨ Features

### 🔍 Machine Learning Models
- **Random Forest**: Ensemble learning with feature importance analysis  

- **Decision Tree**: Interpretable rule-based classification  

- **Support Vector Machine (SVM)**: Kernel-based classification  

- **K-Nearest Neighbors (KNN)**: Instance-based learning method  

- **Light Gradient Boosting Machine (LightGBM)**: Efficient gradient boosting implementation  

- **Logistic Regression**: Statistical baseline model  

- **DengueStackX-19 Model**: Proposed stacked ensemble framework for dengue prediction  

### ⚖️ Data Balancing Techniques
- **SMOTE** (Synthetic Minority Oversampling Technique)
- **ADASYN** (Adaptive Synthetic Sampling)
- **SMOTEENN** (SMOTE + Edited Nearest Neighbours)
- **SMOTETomek** (SMOTE + Tomek Links)
- **Tomek Links** Data cleaning technique that removes borderline examples
- **Without Balancing** (baseline comparison)

### 🌐 Web Platform Features
- **Interactive Model Testing**: Real-time prediction interface
- **Performance Comparison**: Dynamic visualization of model metrics
- **Risk Assessment**: Color-coded probability interpretation
- **Clinical Guidance**: Automated recommendations based on prediction results
- **Responsive Design**: Mobile-friendly interface for field use

## 📊 Dataset Information

The study utilizes a comprehensive dataset of clinical hematological parameters:

- **Total Records**: 1,523 patient samples
- **Features**: 19 clinical parameters
- **Target Variable**: Dengue status (Positive/Negative)
- **Data Source**: Jamalpur 250-Bedded Hospital, Jamalpur, Bangladesh.

### Clinical Parameters Analyzed

| Category | Parameters |
|----------|------------|
| **Demographics** | Gender, Age |
| **Red Blood Cells** | Hemoglobin (g/dL), RBC count, HCT (%), MCV (fL), MCH (pg), MCHC (g/dL), RDW-CV (%) |
| **White Blood Cells** | Total WBC count, Neutrophils (%), Lymphocytes (%), Monocytes (%), Eosinophils (%) |
| **Platelets** | Total Platelet Count, MPV (fL), PDW (%), PCT (%) |

## 🏆 Model Performance

### Best Performing Configurations

| Balancing Technique | Best Model | Accuracy | F1-Score |
|-------------------|------------|----------|----------|
| SMOTE | DengueStackX-19 | 83.45% | 83.76% |
| **SMOTEENN** | **DengueStackX-19** | **96.38%** | **94.20%** |
| SMOTETomek | DengueStackX-19 | 88.67% | 89.30% |
| ADASYN | DengueStackX-19 | 86.51% | 86.98% |
| Tomek Links  | DengueStackX-19 | 77.31% | 84.69% |
| Without Balancing | DengueStackX-19 | 77.38% | 85.35% |

### Performance Highlights
- 🎯 **Highest Accuracy**: 96.38% (SMOTEENN)
- 📈 **Best F1-Score**: 94.20% (SMOTEENN)
- ⚡ **Fastest Inference**: <100ms prediction time
- 🔄 **Cross-validation**: 10-fold CV with consistent results

## 🏗️ System Architecture

```
DengueStackX-19/
├── 🎨 front-end/          # React.js Web Interface
│   ├── src/
│   │   ├── components/    # UI Components
│   │   │   ├── Hero/      # Landing page
│   │   │   ├── TestModel/ # Prediction interface
│   │   │   ├── Models/    # Performance comparison
│   │   │   ├── Research/  # Research overview
│   │   │   └── Team/      # Author information
│   │   └── styles/        # CSS styling
│   └── public/
├── 🚀 back-end/           # FastAPI Server
│   ├── app/
│   │   ├── main.py        # FastAPI application
│   │   ├── predict.py     # Prediction logic
│   │   ├── model.py       # Model loading
│   │   ├── schemas.py     # Data validation
│   │   └── preprocess.py  # Data preprocessing
│   ├── models/            # Trained ML models
│   │   ├── DengueStackX-19.pkl
│   │   ├── scaler.pkl
│   │   └── label_encoder.pkl
│   └── data/              # Dataset files
└── 📋 requirements.txt    # Python dependencies
```

### Technology Stack

**Frontend:**
- React.js 19.1+
- FontAwesome Icons
- Modern CSS with animations
- Responsive design

**Backend:**
- FastAPI (high-performance API)
- Scikit-learn (ML framework)
- Pandas (data processing)
- NumPy (numerical computing)

**ML/Data Science:**
- Imbalanced-learn (data balancing)
- LIME (model explanations)
- Joblib (model serialization)

## 🚀 Installation

### Prerequisites

- Python 3.8+ 
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/mahfuzswe/DengueStackX-19.git
cd DengueStackX-19
```

2. **Create and activate virtual environment**
```bash
# Create virtual environment
python -m venv dengue_env

# Activate virtual environment
# Windows:
dengue_env\Scripts\activate
# macOS/Linux:
source dengue_env/bin/activate
```

3. **Install Python dependencies**
```bash
cd back-end
pip install -r requirements.txt
```

4. **Start FastAPI server**
```bash
# Development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Production server
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Frontend Setup

1. **Install Node.js dependencies**
```bash
cd front-end
npm install
```

2. **Start React development server**
```bash
npm start
```

3. **Build for production**
```bash
npm run build
```

### 🔧 Environment Configuration

Create a `.env` file in the backend directory:
```env
# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
CORS_ORIGINS=http://localhost:3000,http://localhost:3001

# Model Configuration
MODEL_PATH=./models/
SCALER_PATH=./models/scaler.pkl
ENCODER_PATH=./models/label_encoder.pkl
```

## 📖 Usage

### Web Interface

1. **Navigate to the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`

2. **Test Model Predictions**
   - Fill in the patient's hematological parameters
   - Click "Predict Dengue Status"
   - View probability scores and clinical recommendations

3. **Compare Model Performance**
   - Explore different balancing techniques
   - Compare accuracy and F1-scores across models

### API Usage

**Single Prediction:**
```python
import requests

# Patient data
data = {
    "Gender": "Male",
    "Age": 25,
    "Hemoglobin_g_dl": 12.5,
    "Neutrophils_pct": 65,
    "Lymphocytes_pct": 25,
    # ... other parameters
}

response = requests.post("http://localhost:8000/predict", json=data)
result = response.json()
print(f"Prediction: {result['prediction']}")
print(f"Probability: {result['probability']:.4f}")
```

**Batch Prediction:**
```python
batch_data = {
    "data": [
        {
            "Gender": "Female",
            "Age": 30,
            # ... parameters
        },
        # ... more samples
    ]
}

response = requests.post("http://localhost:8000/predict-batch", json=batch_data)
```

## 📚 API Documentation

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/predict` | Single patient prediction |
| POST | `/predict-batch` | Batch predictions |
| GET | `/docs` | Interactive API documentation |

### Request Schema

```json
{
  "Gender": "Male|Female",
  "Age": "integer",
  "Hemoglobin_g_dl": "float",
  "Neutrophils_pct": "integer",
  "Lymphocytes_pct": "integer",
  "Monocytes_pct": "integer",
  "Eosinophils_pct": "integer",
  "RBC": "integer",
  "HCT_pct": "float",
  "MCV_fl": "float",
  "MCH_pg": "float",
  "MCHC_g_dl": "float",
  "RDW_CV_pct": "float",
  "Total_Platelet_Count_cumm": "integer",
  "MPV_fl": "float",
  "PDW_pct": "float",
  "PCT_pct": "float",
  "Total_WBC_count_cumm": "integer"
}
```

### Response Schema

```json
{
  "prediction": 0|1,  // 0: Negative, 1: Positive
  "probability": 0.0-1.0  // Probability of positive case
}
```

## 🖥️ Web Interface

### Screenshots

<!-- Add screenshot placeholders -->
**Figure 1**: Main dashboard showing prediction interface
*[Screenshot to be added]*

**Figure 2**: Model performance comparison visualization
*[Screenshot to be added]*

**Figure 3**: Positive prediction result with clinical guidance
*[Screenshot to be added]*

**Figure 4**: Negative prediction result with monitoring advice
*[Screenshot to be added]*

### Interface Features

- **Real-time Predictions**: Instant results upon form submission
- **Risk Stratification**: Color-coded probability levels (Low/Moderate/High)
- **Clinical Guidance**: Automated recommendations based on prediction
- **Interactive Visualizations**: Dynamic model performance comparisons
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🧪 Model Development

### Development Workflow

1. **Data Preprocessing**
   - Feature scaling and normalization
   - Categorical encoding

2. **Data Balancing**
   - Implementation of 5 balancing techniques
   - Comparative analysis of class distribution

3. **Model Training**
   - Cross-validation with stratified splits
   - Hyperparameter optimization
   - Ensemble method evaluation

4. **Model Evaluation**
   - Multiple metrics: Accuracy, Precision, Recall, F1-score
   - ROC-AUC analysis
   - Confusion matrix evaluation

5. **Model Deployment**
   - Model serialization with joblib
   - FastAPI integration
   - Performance monitoring

### Best Practices Implemented

- **Virtual Environment Management**: Isolated dependencies using `venv`
- **Model Versioning**: Systematic model artifact management
- **Code Documentation**: Comprehensive inline documentation
- **Error Handling**: Robust exception management
- **Input Validation**: Pydantic schema validation
- **CORS Configuration**: Secure cross-origin requests

## 📊 Evaluation Metrics

### Classification Metrics

The models are evaluated using standard classification metrics:

- **Accuracy**: Overall correct predictions
- **Precision**: True positive rate
- **Recall (Sensitivity)**: Ability to identify positive cases
- **F1-Score**: Harmonic mean of precision and recall
- **Specificity**: Ability to identify negative cases
- **ROC-AUC**: Area under the receiver operating characteristic curve

### Clinical Relevance

- **False Positive Rate**: Minimized to reduce unnecessary anxiety
- **False Negative Rate**: Critical metric for dengue detection
- **Prediction Confidence**: Probability scores for clinical decision support

## 🤝 Contributing

We welcome contributions from researchers, developers, and healthcare professionals!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Add tests** (if applicable)
5. **Commit your changes**
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Areas for Contribution

- 🔬 **Research**: New algorithms, feature engineering
- 💻 **Development**: UI/UX improvements, performance optimization
- 📊 **Data**: Additional datasets, validation studies
- 📖 **Documentation**: Tutorials, examples, translations
- 🧪 **Testing**: Unit tests, integration tests, clinical validation

## 📄 Citation

If you use this work in your research, please cite:

```bibtex
@article{denguestackx19_2024,
  title={DengueStackX-19: An Explainable Machine Learning Framework for Dengue Diagnosis Using Clinical Hematological Data},
  author={Mia, Md Rajib and Tuhin, Izaz Ahmmed and Siam, A K M Fazlul Kobir and Shanto, Md Mahfuzur Rahman},
  journal={[Journal Name]},
  year={2024},
  publisher={[Publisher]}
}
```

## 👥 Authors

| Name | Designation | Institution | Email | ORCID |
|------|-------------|-------------|-------|-------|
| **Izaz Ahmmed Tuhin** | Lecturer | Dept. of Software Engineering<br>Daffodil International University | izaz35-634@diu.edu.bd | [0009-0009-1807-3754](https://orcid.org/0009-0009-1807-3754) |
| **A K M Fazlul Kobir Siam** | Student | Dept. of Computer Science and Engineering<br>Daffodil International University | fazlul15-3432@diu.edu.bd | [0000-0002-4991-6816](https://orcid.org/0000-0002-4991-6816) |
| **Md Mahfuzur Rahman Shanto** | Student | Dept. of Software Engineering<br>Daffodil International University | shanto35-917@diu.edu.bd | [0009-0007-6678-0635](https://orcid.org/0009-0007-6678-0635) |
| **Md Rajib Mia** | Lecturer (Senior Scale) | Dept. of Software Engineering<br>Daffodil International University | rajib.swe@diu.edu.bd | [0000-0003-4692-7517](https://orcid.org/0000-0003-4692-7517) |
| **Dr. Imran Mahmud** | Professor | Dept. of Software Engineering<br>Daffodil International University | imranmahmud@daffodilvarsity.edu.bd | [0000-0003-2962-8515](https://orcid.org/0000-0003-2962-8515) |
| **Apurba Ghosh** | Assistant Professor  | Dept. of Multimedia & Creative Technology (MCT)<br>Daffodil International University | apurba.mct@diu.edu.bd | [0009-0006-0340-1864](https://orcid.org/0009-0006-0340-1864) |


## 🙏 Acknowledgments

- Daffodil International University for research support
- Healthcare professionals who provided clinical insights
- Open-source community for tools and libraries
- Patients whose data contributed to this research (anonymized)

## 📞 Support

For questions, suggestions, or collaboration opportunities:

- 📧 **Primary Contact**: rajib.swe@diu.edu.bd
- 🐛 **Issues**: [GitHub Issues](https://github.com/mahfuzswe/DengueStackX-19/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/mahfuzswe/DengueStackX-19/discussions)

---

<div align="center">

**🦟 Fighting Dengue with AI 🤖**

*Advancing healthcare through machine learning research*

[![Star this repo](https://img.shields.io/github/stars/mahfuzswe/DengueStackX-19?style=social)](https://github.com/mahfuzswe/DengueStackX-19)

</div>