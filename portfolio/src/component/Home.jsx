import React from 'react';
import deepak from '../images/deepak-2.jpg';

function Home(){
    return(
        <>
        <div id="home">
        <section className="home">
          <div className="imgBox" data-aos="fade-up">
            <img src={deepak} alt="" className="cover"/>
            <div className="circle"></div>
            <div className="layer"></div>
          </div>
          <div className="content" data-aos="fade-left">
            <h2>Hi, I am <br/> <span>Deepak Maurya</span> </h2>
            <p> <span>Web Designer</span> and <span>App Development</span></p>
            <a href="https://drive.google.com/file/d/1mrbO2ekrg-X7oSq22d9tIrtC_MdAmoBY/view?usp=sharing" className="btn-1">Download My CV</a>
          </div>
        </section>
        </div>
        </>
    )
}

export default Home;