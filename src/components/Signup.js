import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from '../services/Api';


toast.configure()

function Signup() {

    
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
   const history = useHistory();
   
const user = {username, email, password}

  const submit = async (e)=> {
      
      e.preventDefault();
   
   try {
    await api.post("/user/signup",user)
    history.push("/login")
    toast.error("cet utilisateur a bien été créér",{position: toast.POSITION.TOP_CENTER});

    
  } catch (err) {
    console.log(err.response.data);
    toast.warn("cet utilisateur existe déjà",{position: toast.POSITION.TOP_CENTER});
  }
  
      

  }

    return (
        <>

        <form>
            

            <div className="form">
            <label htmlFor="username">Username*:</label>
            <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={(e)=>setUsername(e.target.value)} required/>     

        </div>
        

        <div className="form">
            <label htmlFor="email">Email*:</label>
            <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>     
        </div>

        <div className="form">
            <label htmlFor="password">password*:</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>  
            
        </div>
            
 
     <Link onClick={submit}>Submit</Link>
        </form>
    
     
          <div>
          <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous</Link> 
    </div>

     </>

    )
        };

export default Signup;