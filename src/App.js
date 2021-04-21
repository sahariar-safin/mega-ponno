import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { createContext, useState } from 'react';
import Home from "./componants/Home/Home/Home";
import Product from "./componants/Product/Product/Product";
import Cart from "./componants/Cart/Cart/Cart";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Router>
        <Switch>
          <Route path='/product/:id'>
            <Product></Product>
          </Route>
          <Route path='/cart'>
            <Cart></Cart>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
