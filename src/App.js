import React from 'react';
import './App.css';
import {Switch,Route, Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProdectList'
import  Details from './components/details'
import  Cart from './components/Cart'
import Default from "./components/Default"


function App() {
  return (
   <React.Fragment>
     <Navbar />
     <Switch>
     <Route path="/" component={ProductList}></Route> 
     <Route path="/details" component={Details}></Route> 
     <Route path="/cart" component={Cart}></Route> 
    <Route path="/Default" component={Default}></Route> 
     </Switch>
   </React.Fragment>
  );
}

export default App;
