/*
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';
import LemonadeComponent from './LemonadeComponent';
import CartComponent from './CartComponent';
import { fetchLemonades } from './features/lemonadeSlice';
import './App.css';

function App() {
  const lemonades = useSelector((state) => state.lemonades);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLemonades());
  }, [dispatch]);

  // ... rest of your component code remains the same
}

export default App;
*/







// new code
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';
import LemonadeComponent from './components/LemonadeComponent';
import CartComponent from './components/CartComponent';
import './App.css';

function App() {
  const lemonades = useSelector((state) => state.lemonades);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (lemonade) => {
    dispatch(addToCart(lemonade));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">

      {/* Carte button */}
      <button className="cart-icon-button" onClick={openModal}>
        🛒 {totalItems > 0 && <span className="cart-quantity">{totalItems}</span>}
      </button>

      {/* Lemonade list */}
      <div className="lemonade-list">
        <h2>Lemonades</h2>
        {lemonades.map((lemonade) => (
          <LemonadeComponent key={lemonade.id} lemonade={lemonade} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Modal that shows the carte. */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <CartComponent cart={cart} />
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
