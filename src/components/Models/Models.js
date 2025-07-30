import React, { useState } from 'react';

const Models = () => {
  const [selectedTechnique, setSelectedTechnique] = useState('none');

  const performanceData = {
    none: {
      'Random Forest': { accuracy: 94.2, f1: 91.8 },
      'Neural Network': { accuracy: 96.5, f1: 95.2 },
      'SVM': { accuracy: 89.7, f1: 87.3 }
    },
    smote: {
      'Random Forest': { accuracy: 96.1, f1: 94.5 },
      'Neural Network': { accuracy: 97.8, f1: 96.9 },
      'SVM': { accuracy: 92.3, f1: 90.1 }
    },
    adasyn: {
      'Random Forest': { accuracy: 95.8, f1: 93.9 },
      'Neural Network': { accuracy: 97.5, f1: 96.4 },
      'SVM': { accuracy: 91.8, f1: 89.7 }
    },
    smoteenn: {
      'Random Forest': { accuracy: 95.5, f1: 93.2 },
      'Neural Network': { accuracy: 97.2, f1: 96.1 },
      'SVM': { accuracy: 90.9, f1: 88.8 }
    },
    smotetomek: {
      'Random Forest': { accuracy: 95.9, f1: 94.1 },
      'Neural Network': { accuracy: 97.6, f1: 96.7 },
      'SVM': { accuracy: 92.1, f1: 89.9 }
    },
    tomek: {
      'Random Forest': { accuracy: 94.8, f1: 92.5 },
      'Neural Network': { accuracy: 96.9, f1: 95.8 },
      'SVM': { accuracy: 90.2, f1: 88.1 }
    }
  };

  const handleTechniqueChange = (e) => {
    setSelectedTechnique(e.target.value);
  };

  const data = performanceData[selectedTechnique];
  
  // Find best performing model
  let bestModel = '';
  let bestAccuracy = 0;
  
  Object.keys(data).forEach(model => {
    if (data[model].accuracy > bestAccuracy) {
      bestAccuracy = data[model].accuracy;
      bestModel = model;
    }
  });

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
            <ModelCard modelName="Random Forest" />
            <ModelCard modelName="Neural Network" />
            <ModelCard modelName="SVM" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;