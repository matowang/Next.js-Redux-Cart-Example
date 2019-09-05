import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Cart from '../containers/cart-container';
import ProductCard from '../containers/product-card-container';
import { importProducts } from '../lib/shop-data';

const Home = ({ products }) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Cart />
    <h2>products</h2>
    <ul>
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description} />
      ))}
    </ul>
    <style jsx>{`
      
    `}</style>
  </div>
)

Home.getInitialProps = async ({ req }) => {
  const products = await importProducts();
  return { products: products.default }
}

export default Home