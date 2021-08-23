import React from 'react';
import {NavLink} from 'react-router-dom';
import Footer from '../components/Footer';

import Navigation from '../components/Navigation'

import AccChallenges from '../pages/AccChallenges';




  function Account() {
      

    
     

    return (
        <>
        
         <Navigation/>
         
                <NavLink exact to="/account/ChallengesValidated" activeClassName="nav-active">
               Validated Challenges 
             </NavLink>
         <AccChallenges/> 

      

         <Footer/> 

        </>
        
    );
};

export default Account;