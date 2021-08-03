import './App.css';
import React from 'react';
import Product from './component/Product';
import Menu from './component/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {

  return <>
  <Router>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Product}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </Router>
  
  </>
}
export default App;
