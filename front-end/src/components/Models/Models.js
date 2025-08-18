import React, { useState } from 'react';

const Models = () => {
  const [selectedTechnique, setSelectedTechnique] = useState('none');

  const performanceData = {
    none: {
      'Logistic Regression': { accuracy: 77.38, f1: 85.35 },
      'Decision Tree': { accuracy: 73.44, f1: 82.58 },
      'Random Forest': { accuracy: 76.07, f1: 84.44 },
      'SVM': { accuracy: 74.75, f1: 83.72 },
      'KNN': { accuracy: 71.15, f1: 80.95 },
      'LGBM': { accuracy: 73.77, f1: 82.61 },
      'DengueStackX-19': { accuracy: 77.38, f1: 85.35 }
    },
    smote: {
      'Logistic Regression': { accuracy: 65.23, f1: 67.56 },
      'Decision Tree': { accuracy: 74.34, f1: 76.69 },
      'Random Forest': { accuracy: 80.34, f1: 82.40 },
      'SVM': { accuracy: 79.62, f1: 80.46 },
      'KNN': { accuracy: 71.46, f1: 65.90 },
      'LGBM': { accuracy: 84.17, f1: 85.27 },
      'DengueStackX-19': { accuracy: 83.45, f1: 83.76 }
    },
    adasyn: {
      'Logistic Regression': { accuracy: 56.14, f1: 60.09 },
      'Decision Tree': { accuracy: 69.64, f1: 69.27 },
      'Random Forest': { accuracy: 81.20, f1: 82.59 },
      'SVM': { accuracy: 79.28, f1: 79.62 },
      'KNN': { accuracy: 68.67, f1: 60.37 },
      'LGBM': { accuracy: 83.86, f1: 84.81 },
      'DengueStackX-19': { accuracy: 86.51, f1: 86.98 }
    },
    smoteenn: {
      'Logistic Regression': { accuracy: 78.28, f1: 60.66 },
      'Decision Tree': { accuracy: 81.45, f1: 64.96 },
      'Random Forest': { accuracy: 85.07, f1: 72.73 },
      'SVM': { accuracy: 92.76, f1: 87.30 },
      'KNN': { accuracy: 90.05, f1: 81.03 },
      'LGBM': { accuracy: 90.05, f1: 82.81 },
      'DengueStackX-19': { accuracy: 96.38, f1: 94.20 }
    },
    smotetomek: {
      'Logistic Regression': { accuracy: 67.00, f1: 70.48 },
      'Decision Tree': { accuracy: 74.63, f1: 75.99 },
      'Random Forest': { accuracy: 81.77, f1: 83.84 },
      'SVM': { accuracy: 81.53, f1: 82.99 },
      'KNN': { accuracy: 76.11, f1: 72.05 },
      'LGBM': { accuracy: 86.70, f1: 87.56 },
      'DengueStackX-19': { accuracy: 88.67, f1: 89.30 }
    },
    tomek: {
      'Logistic Regression': { accuracy: 73.40, f1: 82.44 },
      'Decision Tree': { accuracy: 70.57, f1: 79.61 },
      'Random Forest': { accuracy: 75.89, f1: 83.65 },
      'SVM': { accuracy: 73.40, f1: 82.44 },
      'KNN': { accuracy: 71.63, f1: 80.30 },
      'LGBM': { accuracy: 77.31, f1: 84.69 },
      'DengueStackX-19': { accuracy: 77.31, f1: 84.69 }
    }
  };

  const handleTechniqueChange = (e) => {
    setSelectedTechnique(e.target.value);
  };

  const data = performanceData[selectedTechnique];
  
  // DengueStackX-19 is consistently the best model across all balancing techniques
  const bestModel = 'DengueStackX-19';

  const ModelCard = ({ modelName }) => {
    const modelData = data[modelName];
    const isBest = modelName === bestModel;

    return (
      <div className={`performance-card ${isBest ? 'best' : ''}`}>
        {isBest && <div className="best-badge">Best</div>}
        <h4>{modelName}</h4>
        <div className="metric">
          <span className="metric-label">Accuracy</span>
          <div className="metric-bar">
            <div 
              className="metric-fill" 
              style={{ width: `${modelData.accuracy}%` }}
            ></div>
            <span className="metric-value">{modelData.accuracy}%</span>
          </div>
        </div>
        <div className="metric">
          <span className="metric-label">F1-Score</span>
          <div className="metric-bar">
            <div 
              className="metric-fill" 
              style={{ width: `${modelData.f1}%` }}
            ></div>
            <span className="metric-value">{modelData.f1}%</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="models" className="models">
      <div className="container">
        <div className="section-header">
          <h2>Model Performance Comparison</h2>
          <p>Interactive comparison of different ML algorithms with various balancing techniques</p>
        </div>
        
        <div className="model-comparison">
          <div className="comparison-controls">
            <div className="control-group">
              <label>Balancing Technique:</label>
              <select 
                value={selectedTechnique} 
                onChange={handleTechniqueChange}
              >
                <option value="none">Without Balancing</option>
                <option value="smote">SMOTE</option>
                <option value="adasyn">ADASYN</option>
                <option value="smoteenn">SMOTEENN</option>
                <option value="smotetomek">SMOTETomek</option>
                <option value="tomek">Tomek Links</option>
              </select>
            </div>
          </div>
          
          <div className="performance-grid">
            <ModelCard modelName="Logistic Regression" />
            <ModelCard modelName="Decision Tree" />
            <ModelCard modelName="Random Forest" />
            <ModelCard modelName="SVM" />
            <ModelCard modelName="KNN" />
            <ModelCard modelName="LGBM" />
            <ModelCard modelName="DengueStackX-19" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;