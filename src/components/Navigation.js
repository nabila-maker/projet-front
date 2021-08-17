import { NavLink } from "react-router-dom";

function Navigation() {
    return(
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Challenges
            </NavLink>
            <NavLink exact to="/Account" activeClassName="nav-active">
               Account
            </NavLink>
            <NavLink exact to="/signup" activeClassName="nav-active">
               signup
            </NavLink>
            <NavLink exact to="/login" activeClassName="nav-active">
               login
            </NavLink>
        </div>
      
    )
}

export default Navigation;
