import React from 'react';
import NavAccount from '../components/NavAccount';
import Navigation from '../components/Navigation';
import { NavLink } from "react-router-dom";
import Header from '../components/Header';


function Account() {
    return (
        
        
        <div>
            <Header/>
            <div className="nav">
            <NavLink exact to="/SelectChallenge" activeClassName="nav-active">
               your challenges
            </NavLink>
            <NavLink exact to="/ValidatedChallenge" activeClassName="nav-active">
               validated challenges
            </NavLink>
           
        </div>
      
           
        </div>
        
    );
};

export default Account;