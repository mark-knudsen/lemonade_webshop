/* import React from 'react';

const LemonadeComponent = ({ lemonade, onAddToCart }) => {
  return (
    <div className="lemonade">
      <h3>{lemonade.name}</h3>
      <img src="${lemonade.imageUrl}" />
      <p>${lemonade.price}</p>
      <button onClick={() => onAddToCart(lemonade)}>Add to Cart</button>
    </div>
  );
};

export default LemonadeComponent; */



// new code
import React from 'react';

const LemonadeComponent = ({ lemonade, onAddToCart }) => {
  const { name, imageUrl, price, quantities } = lemonade;

  return (
    <div className="lemonade-item">
      <h3 className="lemonade-name">{name}</h3>
      <img src={`${imageUrl}`} alt={name} className="lemonade-image" />
      <p>Price: ${price.toFixed(2)} </p>   
      <p>Amounts: {quantities}</p>
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




