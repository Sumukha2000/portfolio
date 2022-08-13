import React from 'react'
import './productList.css'
import {products} from '../../data'
import Product from '../product/Product'
const ProductList = () => {
  return (
    <div className='pl'>
        
       <div className="pl-texts">

           <h1 className="pl-title">Create and inspire!</h1>
           <p className="pl-desc">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, amet, harum animi eaque officia quas earum dolorem quisquam libero nihil ut inventore quam! Mollitia, maxime? Modi optio amet deserunt consectetur.
           </p>
       </div>
       <div className="pl-list">
       {products.map((item)=>(
         <Product key={item.id} img={item.img} link={item.link} />
       ))}
       </div>
        
        </div>
  )
}

export default ProductList