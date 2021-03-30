import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NhlApi from '../api/NhlApi';

//Bootstrap imports
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const PlayerData = () => {
    const {id} = useParams()
    const apiUrl = `https://statsapi.web.nhl.com/api/v1/people/${id}`
    const [playerdata, setPlayerData] = useState ([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const searchData = async () => {
            
            try{

                const apiResponse = await NhlApi.get(apiUrl);
                console.log(apiResponse)
                setPlayerData(apiResponse.data.people[0]);
                setLoading(false);
            }
            catch (err) {
                console.log(err);
            }
        };

        searchData();
      
    },[apiUrl]);
    console.log(playerdata)
    return(

        <React.Fragment>
        {
            loading ?
            <div>Loading...</div>
        :
        <Col className="text-center">
        <Card key={playerdata.id} className="mt-3 mr-3 mx-auto" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={`/pictures/${playerdata.primaryPosition.name}.png`} alt={playerdata.primaryPosition.name} />
            <Card.Body>
                <Card.Title> {playerdata.fullName}</Card.Title>
            </Card.Body>
        </Card>
        </Col>
        }
        </React.Fragment>
    ) 
    
};
export default PlayerData;