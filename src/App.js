// new code
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, resetCart } from './features/cartSlice';
import LemonadeComponent from './components/LemonadeComponent';
import CartComponent from './components/CartComponent';
import './App.css';
import { fetchLemonades } from './features/lemonadesSlice';


function App() {
  const lemonades = useSelector((state) => state.lemonades);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    dispatch(fetchLemonades());
  }, [dispatch]);
  
  const handleAddToCart = (lemonade) => {
    dispatch(addToCart(lemonade));
  }; 

  const handleResetCart = (lemonade) => {
    dispatch(resetCart(lemonade));
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
 /*  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0); */ /* not used anymore! */

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateQuantities = () => {
    const updatedQuantities = cart.map(item => ({ id: item.id, quantity: item.quantity }));

    fetch('http://localhost:3001/api/updateQuantities', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedQuantities),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        // Close the modal
        closeModal();
        // Refresh lemonades data
        dispatch(fetchLemonades());
        // Reset the cart to an empty array
        handleResetCart(updatedQuantities); // 'RESET_CART' is an example action type, replace it with your actual cart reset action type
      })
      .catch(error => {
        console.error('Error updating quantities:', error);
      });
  };
  
  

  return (
    <div className="App">
        {/* Carte button */}
        <button className="cart-icon-button" onClick={openModal}>
          🛒 {totalItems > 0 && <span className="cart-quantity">{totalItems}</span>}
        </button>

        {/* Lemonade list */}     
        <div  className="container">
          <h2>Lemonades</h2> 
          <div className="lemonade-list">
            {lemonades.map((lemonade) => (
              <LemonadeComponent key={lemonade.id} lemonade={lemonade} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
     

        {/* Modal that shows the carte. */}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <CartComponent cart={cart} />
           {/*    <p className='totalPrice'>Total Price: ${totalPrice.toFixed(2)}</p> */}
              <button className="update-button" onClick={handleUpdateQuantities}>
                CHECKOUT
              </button>
            </div>
          </div>
        )}      
    </div>
  );
}

export default App;
