import React, { useState } from 'react';
import api from '../services/Api';
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import ChallengeService from "../services/ChallengeService"


function Card(props){
    const { challenge }=props;
    const userId =localStorage.getItem("user")
//    const user = JSON.parse(data)
  


 
  
      const addChallenge = async(id) => {
          console.log(id)
        await ChallengeService.addChallenge(id,userId)
        // props.history.push("/Account")

       

      }

  



    //   const submit = async (e)=> {
      
    //     e.preventDefault();
     
    //  try {
    //   await api.post("/user/signup",user)
    //   history.push("/login")
    //   toast.error("cet utilisateur a bien été créér",{position: toast.POSITION.TOP_CENTER});
    
      
    // } catch (err) {
    //   console.log(err.response.data);
    //   toast.warn("cet utilisateur existe déjà",{position: toast.POSITION.TOP_CENTER});
    // }
    // }
   


    
    return (
       <li className="card">
        <div className="data-container">
            <ul>
                <li>{challenge.title}</li>
                <li>{challenge.description}</li>
                <li>{challenge.tag}</li>
            </ul>
            <button  onClick={() => addChallenge(challenge.id)}>Ajouter</button>
          

        </div>

       </li>
    );
};

export default Card;