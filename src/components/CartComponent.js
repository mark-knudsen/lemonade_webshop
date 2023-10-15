import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';

const CartComponent = ({ cart }) => {
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

const dispatch = useDispatch();

const handleRemoveFromCart = (itemId) => {
  dispatch(removeFromCart(itemId));
};

return (
    <div className="cart">
      <h2>Cart</h2>
    {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p className="cart-item-name">{item.name}</p>
          <div className="cart-item-details">                
            <p className="cart-item-quantity">Amounts: {item.quantity}</p>
            <p className="cart-item-price">Price: ${item.price * item.quantity}</p>
          </div>         
        
          <button className="cart-remove-item" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
     <div className="cart-total">
        <p className="cart-total-items">Total Items: {totalItems}</p>
        <p className="cart-total-price">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartComponent;

