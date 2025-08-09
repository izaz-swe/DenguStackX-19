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
    if (!data.hemoglobin_g_dl) {
      errors.push('Valid hemoglobin level (0-25 g/dl) is required');
    }
    if (!data.neutrophils_pct ) {
      errors.push('Valid neutrophils percentage (0-100) is required');
    }
    if (!data.lymphocytes_pct ) {
      errors.push('Valid lymphocytes percentage (0-100) is required');
    }
    if (!data.monocytes_pct ) {
      errors.push('Valid monocytes percentage (0-100) is required');
    }
    if (!data.eosinophils_pct) {
      errors.push('Valid eosinophils percentage (0-100) is required');
    }
    if (!data.rbc ) {
      errors.push('Valid RBC count is required');
    }
    if (!data.hct_pct ) {
      errors.push('Valid HCT percentage (0-100) is required');
    }
    if (!data.mcv_fl ) {
      errors.push('Valid MCV (fl) is required');
    }
    if (!data.mch_pg ) {
      errors.push('Valid MCH (pg) is required');
    }
    if (!data.mchc_g_dl ) {
      errors.push('Valid MCHC (g/dl) is required');
    }
    if (!data.rdw_cv_pct ) {
      errors.push('Valid RDW CV percentage is required');
    }
    if (!data.total_platelet_count_cumm || data.total_platelet_count_cumm < 0) {
      errors.push('Valid platelet count is required');
    }
    if (!data.mpv_fl ) {
      errors.push('Valid MPV (fl) is required');
    }
    if (!data.pdw_pct ) {
      errors.push('Valid PDW percentage is required');
    }
    if (!data.pct_pct ) {
      errors.push('Valid PCT percentage is required');
    }
    if (!data.total_wbc_count_cumm ) {
      errors.push('Valid WBC count is required');
    }
    
    return errors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert form data to appropriate types
    const processedData = {
      Gender: formData.gender,
      Age: parseInt(formData.age),
      Hemoglobin_g_dl: parseFloat(formData.hemoglobin_g_dl),
      Neutrophils_pct: parseInt(formData.neutrophils_pct),
      Lymphocytes_pct: parseInt(formData.lymphocytes_pct),
      Monocytes_pct: parseInt(formData.monocytes_pct),
      Eosinophils_pct: parseInt(formData.eosinophils_pct),
      RBC: parseInt(formData.rbc),
      HCT_pct: parseFloat(formData.hct_pct),
      MCV_fl: parseFloat(formData.mcv_fl),
      MCH_pg: parseFloat(formData.mch_pg),
      MCHC_g_dl: parseFloat(formData.mchc_g_dl),
      RDW_CV_pct: parseFloat(formData.rdw_cv_pct),
      Total_Platelet_Count_cumm: parseInt(formData.total_platelet_count_cumm),
      MPV_fl: parseFloat(formData.mpv_fl),
      PDW_pct: parseFloat(formData.pdw_pct),
      PCT_pct: parseFloat(formData.pct_pct),
      Total_WBC_count_cumm: parseInt(formData.total_wbc_count_cumm)
    };
    
    // Validate form
    // const errors = validateForm(processedData);
    // if (errors.length > 0) {
    //   alert('Please fix the following errors:\n' + errors.join('\n'));
    //   return;
    // }
    
    setIsLoading(true);
    
    try {
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(processedData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Prediction failed");
    }

    const data = await response.json();
    setResult(data);  // e.g. { prediction: 1, probability: 0.92 }

  } catch (error) {
    console.error("❌ Prediction Error:", error);
  }
    setIsLoading(false);
  };

  return (
    <section id="test" className="test-model">
      <div className="container">
        <div className="section-header">
          <h2>Test Our Model</h2>
          <p>Enter Compelete Blood Count(CBC) parameters to get Dengue prediction using our DengueStackX-19 Model</p>
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
                    background: result.prediction === 1 
                      ? 'linear-gradient(135deg, #ef4444, #dc2626)' 
                      : 'linear-gradient(135deg, #10b981, #059669)'
                  }}
                >
                  <FontAwesomeIcon 
                    icon={result.prediction === 1 ? faExclamationTriangle : faCheckCircle} color="#fff" size="2x"
                  />
                </div>
                <h3 style={{
                  color: result.prediction === 1 ? '#ef4444' : '#10b981'
                }}>
                  {result.prediction === 1 ? 'Positive' : 'Negative'}
                </h3>
                <div>
                  <div style={{ marginBottom: '1rem' }}>
                    {/* <strong>Prediction:</strong> {result.probability}<br/> */}
                    <strong>Dengue Probability:</strong> {(result.probability).toFixed(4)}<br/>
                  </div>

                  {/* Add engaging phrase based on probability */}
                  <div style={{ 
                    marginBottom: '1rem', 
                    padding: '1rem', 
                    background: result.probability < 0.3 ? '#d1fae5' : result.probability < 0.7 ? '#fef3c7' : '#fecaca', 
                    borderRadius: '8px', 
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: result.probability < 0.3 ? '#065f46' : result.probability < 0.7 ? '#92400e' : '#991b1b'
                  }}>
                    Our model indicates a <strong>
                      {result.probability < 0.3 ? 'Low' : 
                       result.probability < 0.7 ? 'Moderate' : 'High'}
                    </strong> probability. {
                      result.probability < 0.3 ? 'Stay Alert & Monitor Symptoms.' :
                      result.probability < 0.7 ? 'Consult a doctor for confirmation.' :
                      'Consult a doctor immediately.'
                    }
                  </div>
                  
                  <div style={{ 
                    marginTop: '1rem', 
                    padding: '1rem', 
                    background: '#f3f4f6', 
                    borderRadius: '8px', 
                    fontSize: '0.875rem' 
                  }}>
                    <strong>Disclaimer:</strong> This is a research model prototype.
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="result-icon">
                  <FontAwesomeIcon icon={faChartBar} color="#fff" size="2x" />
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