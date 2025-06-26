import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrescriptionCode from './components/PrescriptionCode';
import PatientDetails from './components/PatientDetails';
import MedicineSummary from './components/MedicineSummary';
import PaymentPage from './components/PaymentPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrescriptionCode />} />
        <Route path="/patient" element={<PatientDetails />} />
        <Route path="/medicines" element={<MedicineSummary />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
