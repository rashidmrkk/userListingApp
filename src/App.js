// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import UserDetails from './Views/UserDetails'
import AddNewUser from "./Views/AddNewUser";


function App() {
  return (
    <div>
      
      <Router          >
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/adduser" component={AddNewUser} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/user/:username" component={UserDetails} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;

