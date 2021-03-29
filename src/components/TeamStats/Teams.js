import React from 'react';

//Bootrap imports
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Teams = ({ teamStats }) => {
    console.log(teamStats)
     
    return(
        <Col>
        <h2 className="text-center mt-3">Team stats</h2>
        <Table key="Team" responsive>
            <thead className="thead-dark">
                <tr className="text-center">
                    <th scope="col" colSpan="12">{teamStats.team}</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Games played:</th>
                    <th colSpan="1"> {teamStats.stats.gamesPlayed}</th>
                    <th></th>
                    <th colSpan="1">Opponent shots per game::</th>
                    <th colSpan="1">{teamStats.stats.shotsAllowed}</th>
                    
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Wins:</th>
                    <th colSpan="1"> {teamStats.stats.wins}</th>
                    <th></th>
                    <th colSpan="1">Save percentage:</th>
                    <th colSpan="1">{(teamStats.stats.savePctg * 100).toFixed(2)}%</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Overtime:</th>
                    <th colSpan="1"> {teamStats.stats.ot}</th>
                    <th></th>
                    <th colSpan="1">Shots per game:</th>
                    <th colSpan="1">{teamStats.stats.shotsPerGame}</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Losses:</th>
                    <th colSpan="1"> {teamStats.stats.losses}</th>
                    <th></th>
                    <th colSpan="1">Shooting percentage:</th>
                    <th colSpan="1">{teamStats.stats.shootingPctg}%</th>
                 
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Points:</th>
                    <th colSpan="1"> {teamStats.stats.pts}</th>
                    <th></th>
                    <th colSpan="1">Powerplay opportunities:</th>
                    <th colSpan="1">{teamStats.stats.powerPlayOpportunities} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoffs:</th>
                    <th colSpan="1">{teamStats.stats.faceOffsTaken}</th>
                    <th></th>
                    <th colSpan="1">Powerplay goals:</th>
                    <th colSpan="1">{teamStats.stats.powerPlayGoals} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoffs won:</th>
                    <th colSpan="1">{teamStats.stats.faceOffsWon}</th>
                    <th></th>
                    <th colSpan="1">Powerplay goals against:</th>
                    <th colSpan="1">{teamStats.stats.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoff lost:</th>
                    <th colSpan="1">{teamStats.stats.faceOffsLost}</th>
                    <th></th>
                    <th colSpan="1">Powerplay %</th>
                    <th colSpan="1">{teamStats.stats.powerPlayPercentage}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoff won %</th>
                    <th colSpan="1">{ (teamStats.stats.faceOffsWon / teamStats.stats.faceOffsTaken * 100).toFixed(2)}%</th>
                    <th></th>
                    <th colSpan="1">Penalty kill %</th>
                    <th colSpan="1">{teamStats.stats.penaltyKillPercentage}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoffs lost %</th>
                    <th colSpan="1">{ (teamStats.stats.faceOffsLost / teamStats.stats.faceOffsTaken * 100).toFixed(2)}%</th>
                    <th colSpan="10"></th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Goals per game:</th>
                    <th colSpan="1">{ teamStats.stats.goalsPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Goals against per game:</th>
                    <th colSpan="1">{ teamStats.stats.goalsAgainstPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                
                {/* //Ranking */}

                <tr className="text-center">
                    <th scope="col" colSpan="12">Overall Ranking</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Wins:</th>
                    <th colSpan="1">{ teamStats.statsRanking.wins}</th>
                    <th colSpan=""></th>
                    <th colSpan="1">Shots allowed:</th>
                    <th colSpan="1">{teamStats.statsRanking.shotsAllowed} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Overtime:</th>
                    <th colSpan="1">{ teamStats.statsRanking.ot}</th>
                    <th></th>
                    <th colSpan="1">Goealies save percentage:</th>
                    <th colSpan="1">{teamStats.statsRanking.savePctRank} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Losses:</th>
                    <th colSpan="1">{ teamStats.statsRanking.losses}</th>
                    <th></th>
                    <th colSpan="1">Shots per game:</th>
                    <th colSpan="1">{teamStats.statsRanking.shotsPerGame} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Points:</th>
                    <th colSpan="1">{ teamStats.statsRanking.pts}</th>
                    <th></th>
                    <th colSpan="1">Shooting percentage:</th>
                    <th colSpan="1">{teamStats.statsRanking.shootingPctRank} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Points per game:</th>
                    <th colSpan="1">{ teamStats.statsRanking.ptPctg}</th>
                    <th></th>
                    <th colSpan="1">Powerplay opportunities:</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayOpportunities} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoffs taken:</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffsTaken}</th>
                    <th></th>
                    <th colSpan="1">Powerplay goal %</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayPercentage} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoffs won:</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffsWon}</th>
                    <th></th>
                    <th colSpan="1">Powerplay goals:</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayGoals} </th>
                    
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Faceoffs lost:</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffsLost}</th>
                    <th></th>
                    <th colSpan="1">Powerplay goals against:</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Face off won %</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffWinPercentage}%</th>
                    <th></th>
                    <th colSpan="1">Penalty kill opportunities:</th>
                    <th colSpan="1">{teamStats.statsRanking.penaltyKillOpportunities} </th>
                </tr>
                <tr className="thead-light">
                <th colSpan="1">Goals per game:</th>
                    <th colSpan="1">{ teamStats.statsRanking.goalsPerGame}</th>
                    <th></th>
                    <th colSpan="1">Penalty Kill percentage:</th>
                    <th colSpan="1">{teamStats.statsRanking.penaltyKillPercentage} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Goals against per game:</th>
                    <th colSpan="1">{ teamStats.statsRanking.goalsAgainstPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                
            </thead>
           
        </Table>
    </Col>
    );
};

export default Teams;