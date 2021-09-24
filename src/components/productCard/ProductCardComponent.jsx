import { Link } from 'react-router-dom';

function ProductCard({title, image, price, id}) {
  return (
    <Link 
    to={{
      pathname: '/detail',
      detailProps: {id}
    }} 
    className="product-card"
  >      <h3 className="product-title">{title}</h3>
      <p>Price: {price}</p>
      <img src={image} alt={title} className="product-image"/>
    </Link>
  )
}

export default ProductCard;