// import logo from './logo.svg';
// import './App.css';
import routes from "./routes";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import UserDetails from './Views/UserDetails'
import AddNewUser from "./Views/AddNewUser";


function App() {
  return (
    <div>
      {/* <Router >
        {
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props => {
                  return (
                    // <route.layout {...props}>
                      <route.component {...props} />
                    // </route.layout>
                  );
                })}
              />
            );
          })
        }
      </Router> */}
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




// export default () => (
//   <Router >
//     {
//       routes.map((route, index) => {
//         return (
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={(props => {
//               return (
//                 <route.layout {...props}>
//                   <route.component {...props} />
//                 </route.layout>
//               );
//             })}
//           />
//         );
//       })
//     }
//   </Router>
// );