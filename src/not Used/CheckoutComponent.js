// Checkout.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CheckoutComponent = ({ selectedLemonades, onCheckout }) => {
  const history = useHistory();

  const handleCheckout = async () => {
    // Make a POST request to your API to update lemonade quantities
    await onCheckout(selectedLemonades);

    // Redirect back to the main page
    history.push('/main-page');
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <ul>
        {selectedLemonades.map((lemonade) => (
          <li key={lemonade.id}>
            {lemonade.name} - Quantity: {lemonade.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
      <Link to="/main-page">Cancel</Link>
    </div>
  );
};

export default CheckoutComponent;
