
import { Fragment } from 'react';
import './App.scss';

import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Header from './pages/home/Header';
import ShopDetail from './pages/shopDetail/ShopDetail';
import Checkout from './pages/page/Checkout';
import ShoppingCart from './pages/page/ShoppingCart';
import Contact from './pages/contact/Contact';
import DemoTest from './pages/testDemo/DemoTest';

function App() {
  return (

    <BrowserRouter>
      <Fragment>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/shopDetail">
              <ShopDetail />
            </Route>
            <Route path="/shoppingCart">
              <ShoppingCart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/test">
              <DemoTest />
            </Route>
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>

  );
}

export default App;
