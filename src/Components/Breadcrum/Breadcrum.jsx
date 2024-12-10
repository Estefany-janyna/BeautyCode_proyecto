import React from 'react'
import './Breadcrum.css'
import img1 from '../../assets/flecha.png'

const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return <div className="breadcrum">Producto no encontrado</div>;
  }

  return (
    <div className="breadcrum">
      HOME <img src={img1} alt="" width="15px" height="15px" />
      SHOP <img src={img1} alt="" width="15px" height="15px" />
      {product.category}
      <img src={img1} alt="" width="15px" height="15px" />
      {product.name}
    </div>
  );
};


export default Breadcrum;



