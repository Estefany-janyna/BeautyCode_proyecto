import React from 'react'
import './Popular.css'
import data_product from '../../assets/data.js'
import Item from '../Item/Item.jsx'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
            })} 
        </div>
        
    </div>
  )
}
console.log(data_product);  // Verifica que los datos se están pasando correctamente

export default Popular