import React, { useState } from "react";
import "../styles/PredictiveForm.css";

function InputField({ label, value, onChange, required }) {
  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options, required, placeholder  }) {
  return (
    <div>
      <label>{label}:</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} required={required}>
      <option value="" disabled selected>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function PredictiveForm({ onPredict, onError }) {
  const [caseKeywords, setCaseKeywords] = useState("");
  const [courtType, setCourtType] = useState("");
  const [numEvidences, setNumEvidences] = useState("");
  const [dataset, setDataset] = useState("tax");
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state when submitting
    setLoading(true);

    const data = {
      case_keywords: caseKeywords,
      court_type: courtType,
      number_of_evidences: numEvidences,
      dataset: dataset,
    };

    try {
      const response = await fetch("http://localhost:5001/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (response.ok) {
        setPredictions(result);
        onPredict(result);
        setError(null);
      } else {
        setError(result.error);
        onError(result.error);
        setPredictions(null);
      }
    } catch (err) {
      setError("An error occurred while fetching predictions.");
      onError("An error occurred while fetching predictions.");
      setPredictions(null);
    }

    setLoading(false); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="predictForm">
      <div className="inputHead">
        <p>Input Case Parameters</p>
        </div>
        
        <SelectField
          label="Type of Case"
          value={dataset}
          onChange={setDataset}
          options={[
            { label: "Arbitration & Disputes", value: "dispute" },
            { label: "Contracts", value: "contract" },
            { label: "Tax", value: "tax" },
            { label: "Property", value: "property" },
            { label: "Corporate", value: "corporate" },
          ]}
          required={true}
          placeholder="Select case type"
        />
        <InputField
          label="Case Keywords"
          value={caseKeywords}
          onChange={setCaseKeywords}
          required={true}
        />

        <InputField
          label="Court Type"
          value={courtType}
          onChange={setCourtType}
          required={true}
        />

        <SelectField
          label="Evidence Strength"
          value={numEvidences}
          onChange={setNumEvidences}
          options={[
            { label: "High", value: "High" },
            { label: "Medium", value: "Medium" },
            { label: "Low", value: "Low" },
          ]}
          required={true}
          placeholder="Select evidence strength"
        />

        <button type="submit" disabled={loading}>Predict</button>
      </form>

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}

      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default PredictiveForm;
