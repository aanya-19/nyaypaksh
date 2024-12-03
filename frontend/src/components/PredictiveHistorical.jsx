import React from "react";
import "../styles/PredictionResults.css";
const HistoricalData = () => {
  return (
    <section className="history-section">
      <h2>Historical Data Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Case</th>
            <th>Outcome</th>
            <th>Key Factors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Case 1</td>
            <td>Win</td>
            <td>Strong Evidence</td>
          </tr>
          <tr>
            <td>Case 2</td>
            <td>Lost</td>
            <td>Weak Evidence</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default HistoricalData;
