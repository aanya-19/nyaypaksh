import React, { useState } from "react";

function PredictForm() {
  const [caseKeywords, setCaseKeywords] = useState("");
  const [courtType, setCourtType] = useState("");
  const [numEvidences, setNumEvidences] = useState("");
  const [dataset, setDataset] = useState("tax");
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setError(null);
      } else {
        setError(result.error);
        setPredictions(null);
      }
    } catch (err) {
      setError("An error occurred while fetching predictions.");
      setPredictions(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Case Keywords:</label>
          <input
            type="text"
            value={caseKeywords}
            onChange={(e) => setCaseKeywords(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Court Type:</label>
          <input
            type="text"
            value={courtType}
            onChange={(e) => setCourtType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number of Evidences:</label>
          <select
            value={numEvidences}
            onChange={(e) => setNumEvidences(e.target.value)}
            required
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label>Dataset:</label>
          <select
            value={dataset}
            onChange={(e) => setDataset(e.target.value)}
            required
          >
            <option value="tax">Tax</option>
            <option value="contract">Contract</option>
            <option value="dispute">Dispute</option>
            <option value="property">Property</option>
            <option value="corporate">Corporate</option>
          </select>
        </div>
        <button type="submit">Predict</button>
      </form>

      {predictions && (
        <div>
          <h3>Predictions:</h3>
          <pre>{JSON.stringify(predictions, null, 2)}</pre>
        </div>
      )}

      {error && <div>{error}</div>}
    </div>
  );
}

export default PredictForm;
