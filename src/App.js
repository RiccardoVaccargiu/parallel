import './App.css';
import Login from './Client/Components/Login/Login.component';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './Client/Components/Homepage/Homepage.component';

function App() {

  
  return (
    <Router>
      <div className="App">
        
      </div>
      <Switch>
        <Route path="/login">
          <Login />  
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
