import './App.css';
import React from 'react';
import Product from './component/Product';
import Menu from './component/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';


function App() {

  return <>
  <NavBar/>
  {/* <Product/> */}
  <Home/>
  <About/>
  </>
}
export default App;
