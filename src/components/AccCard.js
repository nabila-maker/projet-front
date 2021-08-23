import React, { useState } from 'react';
import ChallengeService from '../services/ChallengeService';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../services/Api"



function AccCard(props){
    const { challenge }=props;
    const [data,setData]= useState();
   
    async function deleteChallenge(id) {
        
        await api.delete(`account/delete/${id}`)
        .then((res) => setData(res.data));
        window.location.reload();

      }

   const validateChallenge = async(id) => {


    try{
      await ChallengeService.updateChallenge(id)
      toast.warn("Ce challenge a bien été validé",{position: toast.POSITION.TOP_CENTER});
      props.history.push("/account/ChallengesValidated")
                       }
        catch(err){
        toast.warn("Ce challenge n'a pas pu être validé",{position: toast.POSITION.TOP_CENTER});
             }
     }
       
           



    
    return (
       <li className="accard">
        <div className="data-containerr">
             <ul>
                <li>{challenge.challenge.title}</li>
                <li>{challenge.challenge.description}</li>
                <li>{challenge.challenge.tag}</li>
            </ul> 
           
           <div>
        <button onClick={() => validateChallenge(challenge.id)}>Valider</button> 
       <button onClick={() => deleteChallenge(challenge.id)}>supprimer</button> 
        </div>


        </div>

       
       </li>
    )
};

export default AccCard;