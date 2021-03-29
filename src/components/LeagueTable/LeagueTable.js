import React, { useState, useEffect } from 'react';
import Teams from './Teams';
import NhlApi from '../api/NhlApi';

//Bootstap imports
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

const LeagueTable = () => {
        
    const [divisions, setDivisions] = useState({
        central : [],
        east : [],
        west : [],
        north : [],
        error : ""
       
    });

    useEffect(() => {

        const searchData = async () => {
            
            try {
                const apiResponse = await NhlApi.get(`standings`)
                setDivisions(divisionsData => ({...divisionsData,
                    central : apiResponse.data.records[0].teamRecords,
                    east :  apiResponse.data.records[1].teamRecords,
                    west :  apiResponse.data.records[2].teamRecords,
                    north : apiResponse.data.records[3].teamRecords,
                    ladataan : false
                }))
            }
            catch(err) {
                setDivisions(divisionsData => ({...divisionsData, virhe : "Unable connect to database!"}))
            };
        };
        searchData();  
    },[]);
    
    return(
          
        <React.Fragment>
            {
                divisions.error
                ?
                  <Alert variant="danger" className="mt-4"> {divisions.virhe} </Alert>
                :
                    [<React.Fragment key="leagueTable">
                        <Col className="text-center mt-3"><h2>League table</h2></Col>
                        <Teams division={"Discover Central"} teams={divisions.central} />
                        <Teams division={"MassMutual East"} teams={divisions.east}/>
                        <Teams division={"Honda West"} teams={divisions.west} />
                        <Teams division={"Scotia North"} teams={divisions.north}/>
                        

                       <Table responsive className="mt-4">
                           <thead className="thead-dark">
                               <tr>
                                   <th colSpan="12">Lyhenteet:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                   <th>O = Ottelut</th>
                                   <th>V = Voitot</th>
                                   <th>T = Tasapelit</th>
                                   <th>H = Häviöt</th>
                                   <th>TM = Tehdyt maalit</th>
                                   <th>OM = Päästetyt maalit</th>
                                   <th>P = Pisteet</th>
                                   <th>P/O = Piste %</th>
                               </tr>
                           </tbody>
                       </Table>
                    </React.Fragment>]
            }
        </React.Fragment>
    );
};

export default LeagueTable;