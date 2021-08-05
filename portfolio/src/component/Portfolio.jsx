import React,{useEffect,useState} from 'react';
import firebase from '../firebase';
import {Link} from 'react-router-dom';
function Portfolio(){
    const [projects,setProject]=useState([]);
    const [loading,setLoading]=useState(false);
    const ref=firebase.firestore().collection("projects");
    console.log(ref);
    useEffect(()=>{
      getProject();
    },[]);
    
    function getProject(){
      setLoading(true);
      ref.onSnapshot((querySnapshot)=>{
        const item=[];
        querySnapshot.forEach((doc)=>{
          item.push(doc.data());
        });
        setProject(item);
        setLoading(false);
      });
    }
    if(loading){
      return <h1>Loading..</h1>
    }
  
    return (
      <>
      <section className="portfolio-sec">
      <div className="about" data-aos="fade-right">
                    <p>Portfolio</p>
                    <h1>My Works</h1>
                </div>
                <div className="container">
                    <div className="row justify-content-center px-1">
                    {
          projects.map((project)=>(
            <div id={project.id} className="col-md-3 m-4">
              <img src={project.project_image} alt="" />
              <div className="name">
              <h2>{project.project_name}</h2>
              <p>{project.project_desc}</p>
              <div className="button">
                <Link>Live</Link>
                <a href={project.project_code_link}>Code</a>
              </div>
              </div>
            </div>
          )
            
          )
        }
                        
                    </div>
                </div>
      </section>
      </>
    );
  }
  


export default Portfolio;