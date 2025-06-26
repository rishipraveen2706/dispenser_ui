import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/PatientDetails.css'
const PatientDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="patient-details">
      <h2>Patient Details</h2>
      <p><strong>Name:</strong> {state.patient_name}</p>
      <p><strong>Gender:</strong> {state.patient_gender}</p>
      <button onClick={() => navigate('/medicines', { state })}>Next</button>
    </div>
  );
};

export default PatientDetails;
