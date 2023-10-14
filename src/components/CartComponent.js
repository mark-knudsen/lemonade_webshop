import React from 'react';

const CartComponent = ({ cart }) => {
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;

