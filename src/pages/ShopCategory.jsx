import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
// import { ShopContext } from '../Context/ShopContext.jsx';
import img1 from '../assets/img1-1.png';
import Item from '../Components/Item/item.jsx';
// import ShopContextProvider from './Context/ShopContext';
import { ShopContext } from '../Context/ShopContext.jsx';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  console.log('Category passed as prop:', props.category); // Verifica si se pasa correctamente
  console.log('All products:', all_product); // Verifica si los productos están disponibles

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12Hol estefany </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Ordenar por
          <img src={img1} alt="" width='20px' height='10px'/>
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, i) => {
          console.log(`Product: ${item.name}, Category: ${item.category}`);
          console.log(`Comparing props.category: '${props.category}' with item.category: '${item.category}'`);

          if (props.category === item.category) {
            console.log('Coincidencia encontrada', item);
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else {
            console.log('No match for:', item);
            return null;
          }

        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More 
      </div>
    </div>
  );
};

export default ShopCategory;
