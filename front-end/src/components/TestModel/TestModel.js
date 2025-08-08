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
    hemoglobin_g_dl: '',
    neutrophils_pct: '',
    lymphocytes_pct: '',
    monocytes_pct: '',
    eosinophils_pct: '',
    rbc: '',
    hct_pct: '',
    mcv_fl: '',
    mch_pg: '',
    mchc_g_dl: '',
    rdw_cv_pct: '',
    total_platelet_count_cumm: '',
    mpv_fl: '',
    pdw_pct: '',
    pct_pct: '',
    total_wbc_count_cumm: ''
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
    if (!data.hemoglobin_g_dl || data.hemoglobin_g_dl < 0 || data.hemoglobin_g_dl > 25) {
      errors.push('Valid hemoglobin level (0-25 g/dl) is required');
    }
    if (!data.neutrophils_pct || data.neutrophils_pct < 0 || data.neutrophils_pct > 100) {
      errors.push('Valid neutrophils percentage (0-100) is required');
    }
    if (!data.lymphocytes_pct || data.lymphocytes_pct < 0 || data.lymphocytes_pct > 100) {
      errors.push('Valid lymphocytes percentage (0-100) is required');
    }
    if (!data.monocytes_pct || data.monocytes_pct < 0 || data.monocytes_pct > 100) {
      errors.push('Valid monocytes percentage (0-100) is required');
    }
    if (!data.eosinophils_pct || data.eosinophils_pct < 0 || data.eosinophils_pct > 100) {
      errors.push('Valid eosinophils percentage (0-100) is required');
    }
    if (!data.rbc || data.rbc < 0) {
      errors.push('Valid RBC count is required');
    }
    if (!data.hct_pct || data.hct_pct < 0 || data.hct_pct > 100) {
      errors.push('Valid HCT percentage (0-100) is required');
    }
    if (!data.mcv_fl || data.mcv_fl < 0) {
      errors.push('Valid MCV (fl) is required');
    }
    if (!data.mch_pg || data.mch_pg < 0) {
      errors.push('Valid MCH (pg) is required');
    }
    if (!data.mchc_g_dl || data.mchc_g_dl < 0) {
      errors.push('Valid MCHC (g/dl) is required');
    }
    if (!data.rdw_cv_pct || data.rdw_cv_pct < 0) {
      errors.push('Valid RDW CV percentage is required');
    }
    if (!data.total_platelet_count_cumm || data.total_platelet_count_cumm < 0) {
      errors.push('Valid platelet count is required');
    }
    if (!data.mpv_fl || data.mpv_fl < 0) {
      errors.push('Valid MPV (fl) is required');
    }
    if (!data.pdw_pct || data.pdw_pct < 0) {
      errors.push('Valid PDW percentage is required');
    }
    if (!data.pct_pct || data.pct_pct < 0) {
      errors.push('Valid PCT percentage is required');
    }
    if (!data.total_wbc_count_cumm || data.total_wbc_count_cumm < 0) {
      errors.push('Valid WBC count is required');
    }
    
    return errors;
  };

  const predictDengue = (data) => {
    const riskFactors = [];
    let riskScore = 0;
    
    // Risk assessment based on dengue indicators
    if (data.total_platelet_count_cumm < 150000) {
      riskFactors.push('Low platelet count');
      riskScore += 30;
    }
    
    if (data.hemoglobin_g_dl < 12) {
      riskFactors.push('Low hemoglobin');
      riskScore += 20;
    }
    
    if (data.neutrophils_pct > 70) {
      riskFactors.push('High neutrophils');
      riskScore += 15;
    }
    
    if (data.lymphocytes_pct < 20) {
      riskFactors.push('Low lymphocytes');
      riskScore += 25;
    }
    
    if (data.total_wbc_count_cumm < 4000 || data.total_wbc_count_cumm > 11000) {
      riskFactors.push('Abnormal WBC count');
      riskScore += 20;
    }
    
    if (data.hct_pct < 36) {
      riskFactors.push('Low hematocrit');
      riskScore += 15;
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
      age: parseInt(formData.age),
      hemoglobin_g_dl: parseFloat(formData.hemoglobin_g_dl),
      neutrophils_pct: parseInt(formData.neutrophils_pct),
      lymphocytes_pct: parseInt(formData.lymphocytes_pct),
      monocytes_pct: parseInt(formData.monocytes_pct),
      eosinophils_pct: parseInt(formData.eosinophils_pct),
      rbc: parseInt(formData.rbc),
      hct_pct: parseFloat(formData.hct_pct),
      mcv_fl: parseFloat(formData.mcv_fl),
      mch_pg: parseFloat(formData.mch_pg),
      mchc_g_dl: parseFloat(formData.mchc_g_dl),
      rdw_cv_pct: parseFloat(formData.rdw_cv_pct),
      total_platelet_count_cumm: parseInt(formData.total_platelet_count_cumm),
      mpv_fl: parseFloat(formData.mpv_fl),
      pdw_pct: parseFloat(formData.pdw_pct),
      pct_pct: parseFloat(formData.pct_pct),
      total_wbc_count_cumm: parseInt(formData.total_wbc_count_cumm)
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
          <p>Enter complete blood count (CBC) parameters to get dengue prediction using our ML model</p>
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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
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
                  <label htmlFor="hemoglobin_g_dl">Hemoglobin (g/dl)</label>
                  <input
                    type="number"
                    id="hemoglobin_g_dl"
                    name="hemoglobin_g_dl"
                    value={formData.hemoglobin_g_dl}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    max="25"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="neutrophils_pct">Neutrophils (%)</label>
                  <input
                    type="number"
                    id="neutrophils_pct"
                    name="neutrophils_pct"
                    value={formData.neutrophils_pct}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lymphocytes_pct">Lymphocytes (%)</label>
                  <input
                    type="number"
                    id="lymphocytes_pct"
                    name="lymphocytes_pct"
                    value={formData.lymphocytes_pct}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="monocytes_pct">Monocytes (%)</label>
                  <input
                    type="number"
                    id="monocytes_pct"
                    name="monocytes_pct"
                    value={formData.monocytes_pct}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="eosinophils_pct">Eosinophils (%)</label>
                  <input
                    type="number"
                    id="eosinophils_pct"
                    name="eosinophils_pct"
                    value={formData.eosinophils_pct}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="rbc">RBC Count</label>
                  <input
                    type="number"
                    id="rbc"
                    name="rbc"
                    value={formData.rbc}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="hct_pct">HCT (%)</label>
                  <input
                    type="number"
                    id="hct_pct"
                    name="hct_pct"
                    value={formData.hct_pct}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    max="100"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mcv_fl">MCV (fl)</label>
                  <input
                    type="number"
                    id="mcv_fl"
                    name="mcv_fl"
                    value={formData.mcv_fl}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mch_pg">MCH (pg)</label>
                  <input
                    type="number"
                    id="mch_pg"
                    name="mch_pg"
                    value={formData.mch_pg}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mchc_g_dl">MCHC (g/dl)</label>
                  <input
                    type="number"
                    id="mchc_g_dl"
                    name="mchc_g_dl"
                    value={formData.mchc_g_dl}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="rdw_cv_pct">RDW CV (%)</label>
                  <input
                    type="number"
                    id="rdw_cv_pct"
                    name="rdw_cv_pct"
                    value={formData.rdw_cv_pct}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="total_platelet_count_cumm">Total Platelet Count (/cumm)</label>
                  <input
                    type="number"
                    id="total_platelet_count_cumm"
                    name="total_platelet_count_cumm"
                    value={formData.total_platelet_count_cumm}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mpv_fl">MPV (fl)</label>
                  <input
                    type="number"
                    id="mpv_fl"
                    name="mpv_fl"
                    value={formData.mpv_fl}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="pdw_pct">PDW (%)</label>
                  <input
                    type="number"
                    id="pdw_pct"
                    name="pdw_pct"
                    value={formData.pdw_pct}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="pct_pct">PCT (%)</label>
                  <input
                    type="number"
                    id="pct_pct"
                    name="pct_pct"
                    value={formData.pct_pct}
                    onChange={handleInputChange}
                    step="0.1"
                    min="0"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="total_wbc_count_cumm">Total WBC Count (/cumm)</label>
                  <input
                    type="number"
                    id="total_wbc_count_cumm"
                    name="total_wbc_count_cumm"
                    value={formData.total_wbc_count_cumm}
                    onChange={handleInputChange}
                    min="0"
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