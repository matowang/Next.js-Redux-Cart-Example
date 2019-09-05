import React from 'react';

const ProductCard = ({ id, name, description, addToCart }) => (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
)

export default ProductCard;