import { useEffect, Suspense, lazy } from 'react';
import { getProductByIdAction, clearProductAction } from '../../redux/products/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
const ProductDetailComponent = lazy(() => import('./ProductDetailComponent'));

function ProductDetailContainer(props) {
  const id = props.location.detailProps.id
  const dispatch = useDispatch();
  const product = useSelector(store => store.products.product);

  useEffect(() => {
    dispatch(getProductByIdAction(id))
    return (() => dispatch(clearProductAction()))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Suspense fallback={<Loader />} >
      <ProductDetailComponent product={product} />
    </Suspense>
  )
}

export default ProductDetailContainer;
