import { Link } from 'react-router-dom';

function ProductCard({title, image, price, id}) {
  return (
    <div className="product-card">
      <h3 className="product-title">{title}</h3>
      <p>Price: {price}</p>
      <img src={image} alt={title} className="product-image"/>
    </div>
  )
}

export default ProductCard;