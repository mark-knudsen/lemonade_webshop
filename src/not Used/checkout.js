import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, onClose, onCheckout }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Call the endpoint to update lemonades quantities (implement this logic)
    onCheckout(cartItems);
    // Redirect to the main page after checkout
    navigate('/');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Display cart items and total here */}
        {/* ... */}

        <button className="checkout-button" onClick={handleCheckout}>
          Checkout/Buy
        </button>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Checkout;
