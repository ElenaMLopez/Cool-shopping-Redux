import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsAction } from '../../redux/products/productActions';
import Loader from '../Loader';
const ProductsList = lazy(() => import ('../productList/ProductListContainer'));

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <ProductsList />
      </Suspense>
    </div>
  )
}

export default Home;
