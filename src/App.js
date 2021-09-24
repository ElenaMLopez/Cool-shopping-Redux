import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import generateStore from './redux/store';
import Header from './components/Header';
import Home from './components/home/HomeContainer';
import ProductDetailContainer from './components/productDetail/ProductDetailContainer';

function App() {
  const store = generateStore();
  return (
      <Provider store={store}>
          <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path='/detail' render={(props) => (
            props.location.detailProps !== undefined ?
              <ProductDetailContainer {...props} />
              : <Redirect to="/" />
          )} />
        </Router>
      </Provider>
  );
}

export default App;
