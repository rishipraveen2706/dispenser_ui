import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api';
import '../styles/PrescriptionCode.css'
const PrescriptionCode= () => {
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/prescriptions/${token}`);
      if (res.data) {
        navigate('/patient', { state: res.data });
      } else {
        setError('Invalid Prescription Code');
      }
    } catch (err) {
      setError('Error checking code.');
    }
  };

  return (
    <div className='prescription-code'>
      <h2>Enter Prescription Code</h2>
      <form onSubmit={handleSubmit}>
        <input value={token} onChange={e => setToken(e.target.value)} placeholder="Prescription Code" />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PrescriptionCode;
