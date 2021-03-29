import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

//Compomemt imports
import Container from 'react-bootstrap/Container/'
import Navigation from './components/Navigation';
import Etusivu from './components/Etusivu';
import LeagueTable from './components/LeagueTable/LeagueTable';
import TeamStats from './components/TeamStats/TeamStats';
import Joukkueet from './components/joukkueet/Joukkueet';
import Pelaajat from './components/joukkueet/Pelaajat';
import PelaajaData from './components/joukkueet/PelaajaData';



//Axios, router asennettu
const App = () =>  {

  return (
    <Container>
           
      <Router>
     
        <Navigation/>
        
        <Switch>
          <Route exact path="/" component={Etusivu}/>
          <Route exact path="/leaguetable" component={LeagueTable}/>
          <Route exact path="/joukkueet" component={Joukkueet}/>
          <Route path="/pelaajadata/:id" component={PelaajaData}/>
          <Route path="/Leaguetable/:id" component={TeamStats}/>
          <Route path="/joukkueet/:id" component={Pelaajat}/>
          
         
            
        
        </Switch>
      </Router>

      
     
    </Container>
    
  );
}

export default App;
