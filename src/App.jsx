import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Events from './Pages/Events/Events';
import Camps from './Pages/Camps/Camps';
import Tickets from './Pages/Tickets/Tickets';
import Info from './Pages/Info/Info';
import Login from './Pages/Login/Login';

import Navigation from './Components/Navigation/Navigation';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>

      <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>

      <Switch>
        <Route exact path="/Forside">
          <Home />
        </Route>

        <Route path="/Events/:Event">
          <Events loggedIn={loggedIn} />
        </Route>

        <Route path="/Camps/:Camp">
          <Camps />
        </Route>

        <Route path="/Billetter">
          <Tickets />
        </Route>

        <Route path="/Info">
          <Info />
        </Route>

        <Route path="/Login">
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>

        <Route>
          <Redirect to="/Forside" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
