import React from 'react';
import {NavLink} from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table';

const PlayerList = ({ title,  position }) => {

    const renderedData  = position.map((item) => {
       
        return(
            <tr className="text-center">
                <td colSpan="12">
                    <NavLink className="navlink" to={`/playerdata/${item.person.id}`}> {item.jerseyNumber} {item.person.fullName}</NavLink>
                </td>
            </tr>
        );
        });

    return(
     
        <Col>
            <Table key="PlayerList" responsive>
                <thead className="thead-dark">
                    <tr className="text-center">
                        <th scope="col" colSpan="12">{title}</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedData}
                </tbody>
            </Table>
        </Col>
    )
};

export default PlayerList;