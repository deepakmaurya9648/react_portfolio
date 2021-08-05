import './App.css';
import React,{useEffect} from 'react';
import Portfolio from './component/Portfolio';
import Menu from './component/Menu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Services from './component/Services';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return <>
  <Router>
    <NavBar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/service" component={Services}/>
    </Switch>
  </Router>
  
  </>
}
export default App;
