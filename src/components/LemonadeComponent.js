import React from 'react';

const LemonadeComponent = ({ lemonade, onAddToCart }) => {
  return (
    <div className="lemonade">
      <h3>{lemonade.name}</h3>
      <p>${lemonade.price}</p>
      <button onClick={() => onAddToCart(lemonade)}>Add to Cart</button>
    </div>
  );
};

export default LemonadeComponent;
