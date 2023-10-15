import React from 'react';

const Modal = ({ isOpen, onClose, onCheckout }) => {
  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`}>
      {/* ... modal content */}
      <button className="checkout-button" onClick={onCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Modal;
