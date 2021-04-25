import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { createContext, Suspense, useState } from 'react';
import Product from "./componants/Home/Product/Product";
import Cart from "./componants/Cart/Cart/Cart";
import Order from "./componants/Cart/Order/Order";
import AllFlashSellProducts from "./componants/Home/AllFlashSellProducts/AllFlashSellProducts";
import { lazy } from "react";
const Home = lazy(() => import('./componants/Home/Home/Home'))

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/product/:id'>
              <Product></Product>
            </Route>
            <Route path='/cart'>
              <Cart></Cart>
            </Route>
            <Route path='/flashsells'>
              <AllFlashSellProducts></AllFlashSellProducts>
            </Route>
            <Route path='/order'>
              <Cart></Cart>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
