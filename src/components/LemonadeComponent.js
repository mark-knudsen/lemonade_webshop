import React from 'react';

const LemonadeComponent = ({ lemonade, onAddToCart }) => {
const { name, imageUrl, price, quantities } = lemonade;

return (
    <div className="lemonade-item">
      <h3 className="lemonade-name">{name}</h3>
      <img src={`${imageUrl}`} alt={name} className="lemonade-image" />      
      <div className='priceRight'>Price: ${price.toFixed(2)}</div>   
      <div className='amountRight'>Amounts: {quantities}</div>
      {quantities > 0 ? (
        <button className="add-to-cart-button" onClick={() => onAddToCart(lemonade)}>
          Add to Cart
        </button>
      ) : (
        <button className="add-to-cart-button disabled-button">Sold Out</button>
      )}
    </div>

  );
};

export default LemonadeComponent;




