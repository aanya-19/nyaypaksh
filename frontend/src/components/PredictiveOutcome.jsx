import React from "react";
import "../styles/PredictionResults.css";

const PredictiveOutcome = ({ predictions }) => {
  const formatPrediction = (predictionValue) => {
    return (predictionValue * 100).toFixed(2); 
  };

  return (
    <section className="visualization-section">
      <h2>Predictive Outcome Visualization</h2>
      
      <div className="chart-container">
        <div className="mock-chart">
          <p>Chart Placeholder (Use Chart.js or Recharts)</p>
        </div>

        <div className="insights-container">
          <h3>Insights</h3>
          <p><strong>Recommended Strategies:</strong> Consider strengthening the evidence and referencing key precedents.</p>
          
          <h4>Confidence Levels:</h4>
          {predictions ? (
            Object.keys(predictions).map((key) => (
              <p key={key}>
                {formatPrediction(predictions[key])}%
              </p>
            ))
          ) : (
            <p>Waiting for prediction...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictiveOutcome;
