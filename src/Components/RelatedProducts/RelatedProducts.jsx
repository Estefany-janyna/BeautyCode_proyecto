import React from 'react'
import './RelatedProducts.css'
import data_product from '../../assets/data.js'
import Item from '../Item/Item.jsx'

const RelatedProducts = () => {
  return (
    <div className='realatedproducts'>
      <h1>Telated Products</h1>
      <hr />
      <div className="realatedproducts-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            
        })}
      </div>
    </div>
  )
}

export default RelatedProducts