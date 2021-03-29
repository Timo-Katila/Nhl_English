import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NhlApi from '../api/NhlApi';
import Teams from './Teams';
import Alert from 'react-bootstrap/Alert';

const TeamStats = () => {

    const {id} = useParams();
    const apiUrl = `teams/${id}/stats`
    const [teamStats, setTeamStats] = useState({
        team: "",
        stats: [],
        statsRanking: [],    
        error: ""                                                        
    })

    useEffect(() => {
           
        const searchData = async () => {
            try {
             
                const apiResponse = await NhlApi.get(apiUrl)
                setTeamStats(teamData => ({...teamData,
                    team : apiResponse.data.stats[0].splits[0].team.name,
                    stats : apiResponse.data.stats[0].splits[0].stat,
                    statsRanking : apiResponse.data.stats[1].splits[0].stat
                }))
            }
           catch(err) {
                setTeamStats(teamData => ({...teamData, error : "Unable connect to database!"}))
            };
        };
        searchData()
    },[apiUrl]);
   
    return(
           
        <React.Fragment>
            {
                TeamStats.error
                ?
                  <Alert variant="danger" className="mt-4"> {TeamStats.error} </Alert>
                :
                    [<React.Fragment key="leeagueTable">
                        <Teams teamStats={teamStats}/>
                    </React.Fragment>]
            }
        </React.Fragment>
    );
};

export default TeamStats;