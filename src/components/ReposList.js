import React ,{useState}from "react";
import {ListGroup} from 'react-bootstrap';
import axios from 'axios';
import ReadMe from './ReadMe';
function ReposList({name}){
    
    return ( 
        <div>
            <ListGroup.Item disabled >{name}</ListGroup.Item>
        </div> 
    );
}
export default ReposList;