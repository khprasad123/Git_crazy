import React,{ useState } from "react";
import {Modal,Container} from 'react-bootstrap';
import axios from 'axios';
function ReadMe({content,onHide,show}){

        const [readme,setReadMe]=useState(null);
        
        const getHtml=()=>{
            if(content!==null){
                setReadMe('Helllo');
            }
        }


        return (
             <Container>
                <Modal
                    onHide={onHide}
                    show={show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    >
                    <Modal.Header closeButton >
                        <Modal.Title id="contained-modal-title-vcenter">
                            Read Me
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>  
                               {readme!==null ? (<h1>{readme}</h1>):(<strong>Loading ....</strong>)}
                    </Modal.Body>
                </Modal>
            </Container> 
        );
}
 
export default ReadMe;