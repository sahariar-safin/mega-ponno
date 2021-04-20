import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { createContext, useState } from 'react';
import Home from "./componants/Home/Home/Home";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
