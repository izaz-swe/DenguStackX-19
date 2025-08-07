import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicroscope, 
  faChartBar, 
  faExclamationTriangle, 
  faCheckCircle,
  faSpinner 
} from '@fortawesome/free-solid-svg-icons';

const TestModel = () => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    hemoglobin: '',
    neutrophils: '',
    lymphocytes: '',
    platelets: ''
  });
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (data) => {
    const errors = [];
    
    if (!data.gender) errors.push('Gender is required');
    if (!data.age || data.age < 0 || data.age > 120) {
      errors.push('Valid age (0-120) is required');
    }
    if (!data.hemoglobin || data.hemoglobin < 0 || data.hemoglobin > 25) {
      errors.push('Valid hemoglobin level (0-25) is required');
    }
    if (!data.neutrophils || data.neutrophils < 0 || data.neutrophils > 100) {
      errors.push('Valid neutrophils percentage (0-100) is required');
    }
    if (!data.lymphocytes || data.lymphocytes < 0 || data.lymphocytes > 100) {
      errors.push('Valid lymphocytes percentage (0-100) is required');
    }
    if (!data.platelets || data.platelets < 0) {
      errors.push('Valid platelet count is required');
    }
    
    return errors;
  };

  const predictDengue = (data) => {
    const riskFactors = [];
    let riskScore = 0;
    
    // Simple risk assessment based on common dengue indicators
    if (data.platelets < 150000) {
      riskFactors.push('Low platelet count');
      riskScore += 30;
    }
    
    if (data.hemoglobin < 12) {
      riskFactors.push('Low hemoglobin');
      riskScore += 20;
    }
    
    if (data.neutrophils > 70) {
      riskFactors.push('High neutrophils');
      riskScore += 15;
    }
    
    if (data.lymphocytes < 20) {
      riskFactors.push('Low lymphocytes');
      riskScore += 25;
    }
    
    // Add some randomness for demo purposes
    riskScore += Math.random() * 20;
    
    const prediction = riskScore > 50 ? 'Positive' : 'Negative';
    const confidence = Math.min(95, 60 + Math.random() * 35);
    
    return {
      prediction,
      confidence: confidence.toFixed(1),
      riskScore: Math.min(100, riskScore).toFixed(1),
      riskFactors
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert form data to appropriate types
    const processedData = {
      gender: formData.gender,
      age: parseFloat(formData.age),
      hemoglobin: parseFloat(formData.hemoglobin),
      neutrophils: parseFloat(formData.neutrophils),
      lymphocytes: parseFloat(formData.lymphocytes),
      platelets: parseFloat(formData.platelets)
    };
    
    // Validate form
    const errors = validateForm(processedData);
    if (errors.length > 0) {
      alert('Please fix the following errors:\n' + errors.join('\n'));
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get prediction
    const predictionResult = predictDengue(processedData);
    setResult(predictionResult);
    setIsLoading(false);
  };

  return (
    <section id="test" className="test-model">
      <div className="container">
        <div className="section-header">
          <h2>Test Our Model</h2>
          <p>Enter medical parameters to get dengue prediction using our best-performing model</p>
        </div>
        
        <div className="test-container">
          <div className="test-form-container">
            <form onSubmit={handleSubmit} className="prediction-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="age">Age (years)</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="0"
                    max="120"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="hemoglobin">Hemoglobin (g/dl)</label>
                  <input
                    type="number"
                    id="hemoglobin"
                    name="hemoglobin"
                    value={formData.hemoglobin}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    max="25"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="neutrophils">Neutrophils (%)</label>
                  <input
                    type="number"
                    id="neutrophils"
                    name="neutrophils"
                    value={formData.neutrophils}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lymphocytes">Lymphocytes (%)</label>
                  <input
                    type="number"
                    id="lymphocytes"
                    name="lymphocytes"
                    value={formData.lymphocytes}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="platelets">Platelet Count (/cumm)</label>
                  <input
                    type="number"
                    id="platelets"
                    name="platelets"
                    value={formData.platelets}
                    onChange={handleInputChange}
                    min="0"
                    max="1000000"
                    required
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary btn-predict"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faMicroscope} />
                    Predict Dengue Risk
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="prediction-result">
            {result ? (
              <>
                <div 
                  className="result-icon"
                  style={{
                    background: result.prediction === 'Positive' 
                      ? 'linear-gradient(135deg, #ef4444, #dc2626)' 
                      : 'linear-gradient(135deg, #10b981, #059669)'
                  }}
                >
                  <FontAwesomeIcon 
                    icon={result.prediction === 'Positive' ? faExclamationTriangle : faCheckCircle} 
                  />
                </div>
                <h3 style={{
                  color: result.prediction === 'Positive' ? '#ef4444' : '#10b981'
                }}>
                  {result.prediction === 'Positive' ? 'High Dengue Risk Detected' : 'Low Dengue Risk'}
                </h3>
                <div>
                  <div style={{ marginBottom: '1rem' }}>
                    <strong>Prediction:</strong> {result.prediction}<br/>
                    <strong>Confidence:</strong> {result.confidence}%<br/>
                    <strong>Risk Score:</strong> {result.riskScore}/100
                  </div>
                  
                  {result.riskFactors.length > 0 && (
                    <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                      <strong>Risk Factors Identified:</strong>
                      <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
                        {result.riskFactors.map((factor, index) => (
                          <li key={index}>{factor}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div style={{ 
                    marginTop: '1rem', 
                    padding: '1rem', 
                    background: '#f3f4f6', 
                    borderRadius: '8px', 
                    fontSize: '0.875rem' 
                  }}>
                    <strong>Disclaimer:</strong> This is a research model for educational purposes. 
                    Always consult healthcare professionals for medical diagnosis.
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="result-icon">
                  <FontAwesomeIcon icon={faChartBar} />
                </div>
                <h3>Prediction Result</h3>
                <p>Enter patient data to see the dengue prediction</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestModel;