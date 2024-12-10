import React, { useContext } from 'react'
import  './ProductDisplay.css'
import image2 from '../../assets/star-2.png'
import image1 from '../../assets/star-1.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-start">
            <img src={image1} alt="" width="30px" height="30px"/>
            <img src={image1} alt="" width="30px" height="30px"/>
            <img src={image1} alt="" width="30px" height="30px"/>
            <img src={image1} alt="" width="30px" height="30px"/>
            <img src={image2} alt="" width="30px" height="30px"/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <p className="productdisplay-right-prices-old">s/.{product.old_price}</p>
            <p className="productdisplay-right-prices-new">s/.{product.new_price}</p>
        </div>
        <div className="productdisplay-right-description">
            <p>Este es un producto que se ba iprtar a cjina por favpr no tpvar u estar a tanto de lo que va pasar</p>
        </div>
        <div className="productdisplay-right-size">
            <h1>Seleccionar el tamaño</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CARD</button>
        <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, crop</p>
        <p className='productdisplay-right-category'><span>Tags: </span>Moder, Lastes, crop</p>
      </div>
    </div>
  )
}

export default ProductDisplay