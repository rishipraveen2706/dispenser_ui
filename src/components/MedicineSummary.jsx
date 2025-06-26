import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/MedicineSummary.css';

const MedicineSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
console.log("Medicines from state:", state.medicines);

  return (
    <div className="medicine-summary">
      <h2>Medicine List</h2>
      <ul>
        {state.medicines.map((med, i) => (
          <li key={i}>💊 {med}</li>
        ))}
      </ul>

      <p><strong>Total Price:</strong> ₹{state.total_price}</p>
      <button onClick={() => navigate('/payment', { state })}>Proceed to Payment</button>
    </div>
  );
};

export default MedicineSummary;
