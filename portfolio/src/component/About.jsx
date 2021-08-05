import React from 'react';
import bg from '../images/bg.jpg';

function About() {

    const skill = [
        {
            "name": "html",
            "skill": '95'
        },
        {
            "name": "css",
            "skill": '90'
        },
        {
            "name": "javascript",
            "skill": '75'
        },
        {
            "name": "reactjs",
            "skill": '70'
        },
        {
            "name": "flutter",
            "skill": '70'
        },
        {
            "name": "python",
            "skill": '75'
        }
    ]
    const skill_view = skill.map((item) => {
        return (<>
            <div className="skill">
                <div className="data">
                    <p>{item.name}</p>
                    <p>{item.skill}%</p>
                </div>
                <div className="box">
                    <div className="fill" style={{width:`${item.skill}%`}}></div>
                </div>
            </div>
        </>);
    })
    return (
        <>
            <section className="about-section">
                <div className="about-box" >
                    <div className="about" data-aos="fade-right">
                        <p>About</p>
                        <h1>Learn More about Me</h1>
                    </div>
                    <div className="container-sm px-3 py-3" data-aos="fade-left">
                        <h2>Front End & React Js Developer</h2>
                        <p>Hi there! I'm Deepak Maurya,React js Developer And Flutter Developer.
                            I have been developing web site and Mobile application for over more than 6 months now
                            I develop apps and website appealing ui and performance.
                            Right Now I'm in final year of my graduation degree at GL BAJAJ GROUP OF INSTITUTION MATHURA
                            and Working for Plaxonic Technology Noida as a frontend Developer.
                        </p>
                    </div>
                    <div className="about" data-aos="fade-right">
                        <p>SKILL</p>
                    </div>
                    <div className="container-sm skill-box" data-aos="fade-left">
                        {skill_view}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
