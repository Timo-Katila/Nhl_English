import React, {useState, useEffect} from 'react';
import NhlApi from '../api/NhlApi';
import {NavLink} from 'react-router-dom'
import './Teams.css'

//React bootstrap importit
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Teams = () => {

    const apiUrl = "teams"
    const [teams, setTeams] = useState([])
    
    useEffect(() => {

        const SearchData  = async () => {
            try {
                const apiResponse = await NhlApi.get(apiUrl)
                setTeams(apiResponse.data.teams)
            }
            catch (err){
                console.log("error")
            }
        }

        SearchData();
       
    },[apiUrl]);
  
    const renderedData = teams.map(team => 
        
        
        <Card key={team.id} className="mt-3 mr-3 mx-auto" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`/pictures/${team.id}.png`} alt={team.id} />
        <Card.Body>
            <Card.Title>{team.name}</Card.Title>
            <Card.Text>

                <NavLink className="navlink" to={`/teams/${team.id}`}>
                    <b>Roster</b>
                </NavLink>

                <NavLink className="nav-link" to={`/leaguetable/${team.id}`}>
                    <b>Team stats</b> 
                </NavLink>
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    
    )
      
    return (
        
        <React.Fragment>
            <h3 className="text-center mt-3">Teams</h3>
            <Row className="testi text-center" >
                {renderedData}
            </Row>
        </React.Fragment>
     )
    };

export default Teams;