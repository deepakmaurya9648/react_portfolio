import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    window.onload = function(){
        let menuToggle=document.querySelector(".toggle");
        let navigation=document.querySelector(".navigation");
      menuToggle.onclick=function(){
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
        
      }
    }
    return(<>
        <header>
			<div className="toggle"></div>
			<ul className="navigation">
            <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
			</ul>
            <Link to="/contact" className="btn-1">Hire Me</Link>
		</header>
    </>);
}

export default NavBar;