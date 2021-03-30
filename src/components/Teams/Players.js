import React, {useState, useEffect} from 'react';
import NhlApi from '../api/NhlApi';
import {useParams} from 'react-router-dom';
import PlayerList from './PlayerList';


const Players = () => {

    const {id}   = useParams();
    const apiUrl = `teams/${id}?expand=team.roster`
    const [loading, setLoading] = useState(true)
    const [players, setPlayers] = useState ([])
    
    useEffect(() => {
        
        const searchData = async () => {
            
            try{
                               
                const apiResponse = await NhlApi.get(apiUrl)
                let playerData = apiResponse.data.teams[0].roster.roster
                let player = {
                    teamName : apiResponse.data.teams[0].name,
                    goalies : [],
                    defence : [],
                    rightWing : [],
                    leftWing : [],
                    center : []
                };             
               
                playerData.forEach((item) =>  {
                                         
                    if (item.position.name === "Goalie") {
                        player.goalies.push(item)
                    };
                    if (item.position.name === "Defenseman") {
                        player.defence.push(item)
                    };
                    if (item.position.name === "Right Wing") {
                        player.rightWing.push(item)
                    };
                    if (item.position.name === "Left Wing") {
                        player.leftWing.push(item)
                    };
                    if (item.position.name === "Center") {
                        player.center.push(item)
                    };
                });
                setPlayers(player);
                setLoading(false)      
            }
            catch (err) {
               console.log("Tietokantaan ei saada yhteyttä")
            };
        };   
        searchData();
    },[apiUrl]);
   
    return(
        <React.Fragment>
     
            {
                loading
                ? 
                    <p>loading</p>
            
                :
                <React.Fragment>
                    <PlayerList title="Goalies"  position={players.goalies}/>
                    <PlayerList title="Defence"  position={players.defence}/>
                    <PlayerList title="Center"  position={players.center}/>
                    <PlayerList title="Right wing"  position={players.rightWing}/>
                    <PlayerList title="Left wing"  position={players.leftWing}/>
               </React.Fragment>
            } 
        </React.Fragment>
    );
};
export default Players;