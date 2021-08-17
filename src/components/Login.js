import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from "materialize-css";
import api from '../services/Api';




function Log() {

    
    const [username, setUsername] = useState()
    
    const [password, setPassword] = useState()
   const history = useHistory();
   
const user = {username,password}

  const submit = async (e)=> {
      
      e.preventDefault();
   
   try {
   const {data} = await api.post("/user/login",user)
   localStorage.setItem("token",data.token)
   localStorage.setItem("user",data.user.id)
    history.push("/")
console.log(data)

    
  } catch (err) {
    console.log(err.response.data);
    M.toast({
        html: "Ce user n'existe pas",
        classes: "#c62828 red darken-3",
      });
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
            <label htmlFor="password">password*:</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>  
            
        </div>
            
 
     <Link onClick={submit}>Submit</Link>
        </form>

        <div>
          <Link className="simpleLink" to="/signup">Pas encore inscrit? Vouz pouvez le faire ici</Link> 
    </div>
    
     </>

    )
        };

export default Log;