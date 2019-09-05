import React from 'react';

const Cart = ({ items }) => {
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {
                    items.map(({ id, name, quantity }) => (
                        <li key={id}>{name}: {quantity}</li>
                    ))}
            </ul>
        </div>
    )
}

export default Cart;