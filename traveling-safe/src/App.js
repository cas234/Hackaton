import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Visualizar from './pages/Visualizar';
function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Visualizar" exact component={Visualizar}/>
    </Switch>
  </Router>
  );
}

export default App;
