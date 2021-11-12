import React from 'react'
import Login from './Components/Login/Login.component';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage.component';
import GuestView from './Components/Guest/guestview.component';

function App() {

  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/homepage'>
          <Homepage />
        </Route>
        <Route path='/guest'>
          <GuestView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
