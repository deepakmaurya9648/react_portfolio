import React from 'react';
import banner from '../images/banner.jpg';
import girl from '../images/girl.jpg';


function Menu(){

  
  window.onload = function(){
    let menuToggle=document.querySelector(".toggle");
    let navigation=document.querySelector(".navigation");
    let sec=document.querySelector(".sec");
  menuToggle.onclick=function(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    sec.classList.toggle('active');
    
  }
}
    return (<>
        <div className="navigation">
          <div className="banner">
            <img src={banner} alt="" className="cover"/>
          </div>
          <div className="navLink">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
          </div>
        </div>
        <section className="sec">
          <header>
            <div className="toggle"></div>
            <a href="" className="btn-1">Hire Me</a>
          </header>
          <div className="imgBox">
            <img src={girl} alt="" className="cover"/>
            <div className="layer"></div>
          </div>
          <div className="content">
            <h2>Hi, I am <br/> <span>Elina Smith</span> </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum quod nobis id minima impedit, hic aut cupiditate, corporis molestiae est! Aperiam, necessitatibus? Odio sunt corrupti amet iste quos pariatur.</p>
            <a href="https://drive.google.com/file/d/1mrbO2ekrg-X7oSq22d9tIrtC_MdAmoBY/view?usp=sharing" className="btn-1">Download My CV</a>
          </div>
        </section>
    </>);
}

export default Menu;