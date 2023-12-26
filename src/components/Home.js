import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';

export default function Home() {

  const {state: {cart, product}} = CartState();

  console.log(product);

  return (
    <div className='home'>
      {/* <Filter /> */}
      <div className='productContainer'>
        {product.map((products) => {
          return <SingleProduct products={ products} key={products.id} />
        })}
      </div>
    </div>
  )
}
