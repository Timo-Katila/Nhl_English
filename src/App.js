import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

//Compomemt imports
import Container from 'react-bootstrap/Container/'
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import LeagueTable from './components/LeagueTable/LeagueTable';
import TeamStats from './components/TeamStats/TeamStats';
import Teams from './components/Teams/Teams';
import Players from './components/Teams/Players';
import PlayerData from './components/Teams/PlayerData';

const App = () =>  {

  return (
    <Container>
           
      <Router>
     
        <Navigation/>
        
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/leaguetable" component={LeagueTable}/>
          <Route exact path="/teams" component={Teams}/>
          <Route path="/playerdata/:id" component={PlayerData}/>
          <Route path="/Leaguetable/:id" component={TeamStats}/>
          <Route path="/teams/:id" component={Players}/>
        </Switch>
      </Router>
     
    </Container>
  );
}

export default App;
