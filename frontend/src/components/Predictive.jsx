import React, { useState } from "react";
import PredictiveForm from "./PredictiveForm";
import PredictiveOutcome from "./PredictiveOutcome";
import HistoricalData from "./PredictiveHistorical";
import DownloadReport from "./DownloadReport";
import "../styles/Predicitve.css";

const Predictive = () => {
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for fetching predictions
  const [error, setError] = useState(null); // Error state

  // Function to handle predictions from PredictiveForm
  const handlePredictions = (predictions) => {
    setPredictions(predictions);
    setLoading(false); // Set loading to false after predictions are set
  };

  const handleError = (error) => {
    setError(error);
    setLoading(false); 
  };

  return (
    <div className="predictive-analytics">
      <h1>Predictive & Precedent Analysis</h1>
      <p className="subHead">Utilise advanced analytics to predict case outcomes based on historical data</p>
      <PredictiveForm onPredict={handlePredictions} onError={handleError} />

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading predictions...</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {predictions && !loading && (
        <>
          <PredictiveOutcome predictions={predictions} />
          <HistoricalData />
          <DownloadReport />
        </>
      )}
    </div>
  );
};

export default Predictive;
