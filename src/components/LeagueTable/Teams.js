import React from 'react';
import {NavLink} from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';

const Teams = ({teams, division}) => {
    
    const renderedData  = teams.map((team) => {
         
        return(
            
            <tr className="bg-light" key={team.team.id}>
                
                <td>{team.divisionRank}.
                    <NavLink to={`/leaguetable/${team.team.id}`}> {team.team.name}</NavLink>
                </td>
                <td>{team.gamesPlayed}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.ot}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.goalsScored}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.points}</td>
                <td>{team.pointsPercentage.toFixed(2)}</td>
            </tr>
        ) 
    });
   
    return (
        <Col>
            <Table key="something" responsive>
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th scope="col" colSpan="12">{division}</th>
                    </tr>
                    <tr className="thead-light">
                        <th>Joukkue</th>
                        <th>O</th>
                        <th>V</th>
                        <th>T</th>
                        <th>H</th>
                        <th>TM</th>
                        <th>PM</th>
                        <th>P</th>
                        <th>P/O</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </Table>
        </Col>
    );
};

export default Teams;