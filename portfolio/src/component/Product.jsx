import React,{useEffect,useState} from 'react';
import firebase from '../firebase';

function Product(){
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
      <div className="App">
        <h1>Projects</h1>
        {
          projects.map((project)=>(
            <div id={project.id}>
              <h2>{project.project_name}</h2>
              <p>{project.project_desc}</p>
              <img src={project.project_image} alt="" />
            </div>
          )
            
          )
        }
      </div>
    );
  }
  


export default Product;