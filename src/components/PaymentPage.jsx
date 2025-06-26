    import React, { useState } from 'react';
    import { useLocation,useNavigate  } from 'react-router-dom';
    import axios from '../api';
import '../styles/PaymentPage.css';


    const PaymentPage = () => {
    const { state } = useLocation();
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handlePayment = async () => {
        const isPaid = window.confirm('Simulate payment success?'); // Simulate success/failure
        if (!isPaid) {
        setStatus('Payment Failed');
        return;
        }
    console.log("Sending to ESP32 with medicines:", state.medicines);

        try {
        await axios.post('/dispense', {
            token_number: state.token_number,
            medicines: state.medicines,
            total_price: state.total_price
        });
        setStatus('✅ Payment Success & Data Sent to ESP32');
        setStatus('✅ Payment Success & Data Sent to ESP32');
setTimeout(() => {
  navigate('/'); // Redirects to prescription entry page
}, 3000); // 3-second delay

        } catch (err) {
        setStatus('❌ Failed to send data to ESP32');
        }
    };

    return (
       <div className="payment-page">
        <h2>Payment</h2>
        <button onClick={handlePayment}>Pay Now</button>
        {status && <p>{status}</p>}
        </div>
    );
    };

    export default PaymentPage;
