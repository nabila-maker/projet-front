import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from "materialize-css";
import api from '../services/Api';
import {UserContext} from '../App'



function Log() {

    const{state,dispatch}=useContext(UserContext)

    const [username, setUsername] = useState()
    
    const [password, setPassword] = useState()
   const history = useHistory();
   
const user = {username,password}

  const submit = async (e)=> {
      
      e.preventDefault();
   
   try {
       
   const {data} = await api.post("/user/login",user)
   console.log(data)
   localStorage.setItem("token",data.token)
   const userInfo = data.user
   console.log(userInfo)
   localStorage.setItem("user",userInfo.id)  //Json.stringify
   dispatch({type:"USER",payload:data.user})
    history.push("/")


    
  } catch (err) {
    console.log(err);
    M.toast({
        html: "Ce user n'existe pas",
        classes: "#c62828 red darken-3",
      });
  }
  
      

  }

    return (
        <>

        <form className='formLog'>
         

            <div className="form">
            <label htmlFor="username">Username*:</label>
            <input type="text" className="form-cont" placeholder="Enter username" name="username" onChange={(e)=>setUsername(e.target.value)} required/>     

        </div>


        <div className="form">
            <label htmlFor="password">password*:</label>
            <input type="password" className="form-cont" placeholder="Enter password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>  
            
        </div>
            
 
     <Link onClick={submit}>Submit</Link>
        </form>

        <div>
          <Link className="simpleLink" to="/signup">Pas encore inscrit? Vous pouvez le faire ici</Link> 
    </div>
    
     </>

    )
        };

export default Log;