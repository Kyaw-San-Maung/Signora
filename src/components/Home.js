import React from 'react'
import { CartState } from '../context/Context'

export default function Home() {

  const {state: {cart, product}} = CartState();

  console.log(product);

  return (
    <div className='home'>
      {/* <Filter /> */}
      <div className='productContainer'>
        {product.map((products) => {
          return <span key={products.id}>{ products.name}</span>
        })}
      </div>
    </div>
  )
}
