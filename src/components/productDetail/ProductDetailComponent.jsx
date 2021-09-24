import { Link } from 'react-router-dom';

function ProductDetailComponent({product}) {
    
  return (
    
    <div className="product-detail_container">
      <Link to="/" className="product-detail__back-link">Home</Link>
      <main className="product-detail__info-container">
        <h1 className="product-detail__title">{product.title}</h1>
        <img src={product.image} alt={product.title} className="product-detail__image"/>
        <p className="product-detail__description">{product.description}</p>
        <p className="product-detail__description">Price: {product.price}</p>
        <button className="btn add-card__btn disabled">Add to cart!</button>
      </main>
    </div>
  )
}

export default ProductDetailComponent;
