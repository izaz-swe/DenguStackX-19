import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faBalanceScale, faRobot } from '@fortawesome/free-solid-svg-icons';

const Research = () => {
  return (
    <section id="research" className="research">
      <div className="container">
        <div className="section-header">
          <h2>Research Overview</h2>
          <p>Comprehensive study on dengue prediction using various machine learning approaches</p>
        </div>
        
        <div className="research-grid">
          <div className="research-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <h3>Dataset Analysis</h3>
            <p>Analysis of 1,523 patient records with 18 medical features including blood parameters, demographics, and laboratory results.</p>
            <ul>
              <li>Hemoglobin levels</li>
              <li>White blood cell counts</li>
              <li>Platelet counts</li>
              <li>Other hematological parameters</li>
            </ul>
          </div>
          
          <div className="research-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faBalanceScale} />
            </div>
            <h3>Balancing Techniques</h3>
            <p>Comparison of six different data balancing approaches to handle class imbalance in dengue datasets.</p>
            <ul>
              <li>SMOTE (Synthetic Minority Oversampling)</li>
              <li>ADASYN (Adaptive Synthetic Sampling)</li>
              <li>SMOTEENN & SMOTETomek</li>
              <li>Tomek Links</li>
            </ul>
          </div>
          
          <div className="research-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <h3>ML Algorithms</h3>
            <p>Evaluation of multiple machine learning algorithms from traditional to deep learning approaches.</p>
            <ul>
              <li>Logistic Regression & SVM</li>
              <li>Random Forest & Decision Trees</li>
              <li>Neural Networks & LSTM</li>
              <li>Convolutional Neural Networks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;