import { useSelector } from 'react-redux';
import ProductCard from '../productCard/ProductCardComponent';
import { v4 as uuidv4 } from 'uuid';

function ProductsList() {
  const products = useSelector(store => store.products.products);

  return (
    <div>
      <h1 className="product-list__title">Amazing products</h1>
      <ul className="products-list">
        {products.map( product => (
              <li key={uuidv4()} className="product-list_element">
                <ProductCard 
                title={product.title} 
                price={product.price} 
                image={product.image} 
                id={product.id}/>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default ProductsList;
