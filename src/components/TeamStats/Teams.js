import React from 'react';

//Bootrap imports
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Teams = ({ teamStats }) => {
    console.log(teamStats)
    // Object.entries(teamStats.tilastotRanking).map(([key, value]) => { //Poistaa englanninkieliset loppuliitteet //varmaan forEachillakin olisi voinut tehdä.
      
    //     if (value.length > 3) { 
    //         teamStats.tilastotRanking[key] = value.slice(0,2)
         
    //     }

    //     if (value.length === 3) {
    //         teamStats.tilastotRanking[key] = value.slice(0,1)
          
    //     }

    //     return () => {}
    // })
   
    return(
        <Col>
        <h2 className="text-center mt-3">Team stats</h2>
        <Table key="Team" responsive>
            <thead className="thead-dark">
                <tr className="text-center">
                    <th scope="col" colSpan="12">{teamStats.team}</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Ottelut:</th>
                    <th colSpan="1"> {teamStats.stats.gamesPlayed}</th>
                    <th></th>
                    <th colSpan="1">Vastustajan laukaukset / ottelu:</th>
                    <th colSpan="1">{teamStats.stats.shotsAllowed}</th>
                    
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Voitot:</th>
                    <th colSpan="1"> {teamStats.stats.wins}</th>
                    <th></th>
                    <th colSpan="1">Maalivahtien torjuntaprosentti:</th>
                    <th colSpan="1">{(teamStats.stats.savePctg * 100).toFixed(2)}%</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Tasapelit:</th>
                    <th colSpan="1"> {teamStats.stats.ot}</th>
                    <th></th>
                    <th colSpan="1">Laukauksia / ottelu:</th>
                    <th colSpan="1">{teamStats.stats.shotsPerGame}</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Häviöt:</th>
                    <th colSpan="1"> {teamStats.stats.losses}</th>
                    <th></th>
                    <th colSpan="1">Laukausten maalintekoprosentti:</th>
                    <th colSpan="1">{teamStats.stats.shootingPctg}%</th>
                 
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Pisteet:</th>
                    <th colSpan="1"> {teamStats.stats.pts}</th>
                    <th></th>
                    <th colSpan="1">Ylivoimia:</th>
                    <th colSpan="1">{teamStats.stats.powerPlayOpportunities} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitukset:</th>
                    <th colSpan="1">{teamStats.stats.faceOffsTaken}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima maalit:</th>
                    <th colSpan="1">{teamStats.stats.powerPlayGoals} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloituksia voitettu:</th>
                    <th colSpan="1">{teamStats.stats.faceOffsWon}</th>
                    <th></th>
                    <th colSpan="1">Päästetyt ylivoimamaalit:</th>
                    <th colSpan="1">{teamStats.stats.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">AloituksiaHäviöt:</th>
                    <th colSpan="1">{teamStats.stats.faceOffsLost}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima %</th>
                    <th colSpan="1">{teamStats.stats.powerPlayGoalsAgainst}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitusvoitto %</th>
                    <th colSpan="1">{ (teamStats.stats.faceOffsWon / teamStats.stats.faceOffsTaken * 100).toFixed(2)}%</th>
                    <th></th>
                    <th colSpan="1">Alivoima %</th>
                    <th colSpan="1">{teamStats.stats.penaltyKillPercentage}% </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitustenhäviö %</th>
                    <th colSpan="1">{ (teamStats.stats.faceOffsLost / teamStats.stats.faceOffsTaken * 100).toFixed(2)}%</th>
                    <th colSpan="10"></th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Maaleja tehty / ottelu</th>
                    <th colSpan="1">{ teamStats.stats.goalsPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Maaleja päästetty / ottelu</th>
                    <th colSpan="1">{ teamStats.stats.goalsAgainstPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                
                {/* //Ranking */}

                <tr className="text-center">
                    <th scope="col" colSpan="12">Ranking</th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Voittoja:</th>
                    <th colSpan="1">{ teamStats.statsRanking.wins}</th>
                    <th colSpan=""></th>
                    <th colSpan="1">Vastustajan laukaukset:</th>
                    <th colSpan="1">{teamStats.statsRanking.shotsAllowed} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Tasapelit:</th>
                    <th colSpan="1">{ teamStats.statsRanking.ot}</th>
                    <th></th>
                    <th colSpan="1">Maalivahtien torjuntaprosentti:</th>
                    <th colSpan="1">{teamStats.statsRanking.savePctRank} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Vähiten häviöitä:</th>
                    <th colSpan="1">{ teamStats.statsRanking.losses}</th>
                    <th></th>
                    <th colSpan="1">Laukauksia / ottelu:</th>
                    <th colSpan="1">{teamStats.statsRanking.shotsPerGame} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Pisteitä:</th>
                    <th colSpan="1">{ teamStats.statsRanking.pts}</th>
                    <th></th>
                    <th colSpan="1">Laukausten maalintekoprosentti:</th>
                    <th colSpan="1">{teamStats.statsRanking.shootingPctRank} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Pisteitä / peli:</th>
                    <th colSpan="1">{ teamStats.statsRanking.ptPctg}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima:</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayOpportunities} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloituksia:</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffsTaken}</th>
                    <th></th>
                    <th colSpan="1">Ylivoiman maalinteko %</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayPercentage} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitusvoitot:</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffsWon}</th>
                    <th></th>
                    <th colSpan="1">Ylivoima maalit:</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayGoals} </th>
                    
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitushäviöt:</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffsLost}</th>
                    <th></th>
                    <th colSpan="1">Ylivoimalla päästetyt maalit:</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Aloitus voitot %</th>
                    <th colSpan="1">{ teamStats.statsRanking.faceOffWinPercentage}%</th>
                    <th></th>
                    <th colSpan="1">Jäähyjä:</th>
                    <th colSpan="1">{teamStats.statsRanking.penaltyKillOpportunities} </th>
                </tr>
                <tr className="thead-light">
                <th colSpan="1">Maaleja tehty / ottelu:</th>
                    <th colSpan="1">{ teamStats.statsRanking.goalsPerGame}</th>
                    <th></th>
                    <th colSpan="1">Alivoimalla päästetyt maalit:</th>
                    <th colSpan="1">{teamStats.statsRanking.powerPlayGoalsAgainst} </th>
                </tr>
                <tr className="thead-light">
                    <th colSpan="1">Maaleja päästetty / ottelu:</th>
                    <th colSpan="1">{ teamStats.statsRanking.goalsAgainstPerGame}</th>
                    <th colSpan="10"></th>
                </tr>
                
            </thead>
           
        </Table>
    </Col>
    );
};

export default Teams;