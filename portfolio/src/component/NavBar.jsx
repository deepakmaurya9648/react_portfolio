import React from 'react';

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
            <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
			</ul>
            <a href="#" className="btn-1">Hire Me</a>
		</header>
    </>);
}

export default NavBar;