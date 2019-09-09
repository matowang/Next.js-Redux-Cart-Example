import React from 'react';
import Link from 'next/link';

const ProductCard = ({ id, name, description, addToCart }) => (
    <div>
        <h3>
            <Link href="/products/[id]" as={`/products/${id}`}>
                <a>{name}</a>
            </Link>
        </h3>
        <p>{description}</p>
        <button onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
)

export default ProductCard;