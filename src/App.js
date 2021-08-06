import Challenge from "./pages/Challenge";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Login from "./pages/Login";



function App() {
  return (
    <BrowserRouter>
      <Switch>
      
      <Route path="/signup" exact component={Signup}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/" exact component={Challenge}/>
      <Route path="/account" exact component={Account}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;

