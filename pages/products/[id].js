import React from 'react';
import { useRouter } from 'next/router';
import data from '../../data.json';

const ProductsPage = () => {
    const router = useRouter();
    const productData = data.find(({ id }) => id === parseInt(router.query.id, 10));
    return (
        <div>
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
        </div>
    )
}

export default ProductsPage;