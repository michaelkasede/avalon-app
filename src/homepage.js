import React, { Component } from 'react';
import extreme from './assets/extreme.jpg';
import {Container, Row, Col} from 'react-bootstrap';

class Homeimage extends Component{
    render (){
        return(
            <div style={{width:'100%', margin:'auto'}}>
            <Container>
            <Row>
                <Col></Col>
                <Col xs={5}>
                    <img src={extreme} alt="Extreme Adventure" />
                </Col>
                <Col></Col>
            </Row>
            </Container >
            </div>
        )
    }
}

export default Homeimage;