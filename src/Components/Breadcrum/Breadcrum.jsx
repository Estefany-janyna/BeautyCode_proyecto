  import React from 'react'
  import './Breadcrum.css'
  import img1 from '../../assets/4.jpg'

  const Breadcrum = (props) => {
    const { product } = props;
    console.log("Product recibido en Breadcrum:", product);

    if (!product) {
      return <div>Producto no encontrado</div>;
    }

    return (
      <div className='breadcrum'>
        HOME <img src={img1} alt='' />
        SHOP <img src={img1} alt='' />
        {product.category} <img src={img1} alt='' />
        {product.name}
      </div>
    );
  };


  export default Breadcrum;