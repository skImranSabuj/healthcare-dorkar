import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appoinment from './pages/Appointment/Appoinment/Appoinment';
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/appoinment">
            <Appoinment />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
