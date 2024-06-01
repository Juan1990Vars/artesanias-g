import React from 'react'
import { products } from '../assets/products'
import './styles/products.css'

const Products = () => {
  return (
    <div id='productos' className='products'>
        {
            products.map((product) => (
                <section>
                    <div className='products__pro'>
                        <h5 className='products__title'>{product.title}</h5>
                        <img className='products__img' src={product.image} alt="" />
                        <p className='products__p'>{product.description}</p>
                        <p className='products__p'>{product.size} / {product.price}</p>
                    </div>
                </section>
            ))
        }
    </div>
  )
}

export default Products