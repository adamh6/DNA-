import React, { Component } from "react";
import { Row, Col, Button } from 'reactstrap';
import {
    NavLink,
  } from "react-router-dom";
import Watson from './Watson-Crick.jpg';

import Popup from 'reactjs-popup';

  const Trivia =  () => (
    <Popup trigger={<Button style={didYouKnow}> <i class="fas fa-info-circle"></i> Did you know?</Button>} position="left center" on="hover">
      <div class="popup" style={popupStyle}>The human genome contains 3 billion base pairs of DNA!</div>
    </Popup>
  )

const next = {
  position: 'absolute',
  bottom: '0',
  right: '0',
  border: 'none',
  background: 'none',
  color: '#333',
  fontSize: "30px"
}

const back = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  border: 'none',
  background: 'none',
  color: '#333',
  fontSize: "30px"
}

const popupStyle = {
  // padding: "0",
}

const imageStyle = {
  maxWidth: "100%",
  marginLeft: "auto",
  marginTop: "3rem",
  // marginBottom: "3rem"
}

const didYouKnow = {
  position: 'absolute',
  top: '0',
  right: '0',
  border: 'none',
  background: 'none',
  color: '#778899'
}

const rowStyle = {
  marginBottom: '2rem'
}

class Intro extends Component {

  render() {



    return (

      <div>
      <Trivia style={popupStyle}></Trivia>
        <Row style={rowStyle}>
          <Col lg="6" md="12">
          <h2>Introduction</h2>
          <p>The DNA <strong>double helix model</strong> was relatively simple and has revolutionized the study of
          biology and genetics. In order for the double helix model to explain the known facts
          about DNA, the model&#39;s chemical structure had to be able to explain <strong>three</strong> activities:
          </p>
          <ol>
            <li>Replicate itself</li>
            <li>Send instructions to the cell to enable it to manufacture proteins</li>
            <li>Change in a controlled manner in order for a species to survive in a changing
            environment (evolve)</li>
          </ol>

          <p>Once the model was proposed, <strong>Watson and Crick</strong> and many others now turned to
          exploring how DNA went about carrying out the following <strong>three</strong> functions. (Next page)</p>
          </Col>
          <Col lg="6" md="12">
          <figure>
            <img src={Watson} alt="Watson and Crick" style={imageStyle}/>
          <figcaption>James Watson and Francis Crick </figcaption>
          </figure>
          </Col>
        </Row>

        <NavLink to="./Timeline"><Button style={back}><i class="fas fa-long-arrow-alt-left"></i></Button></NavLink>
        <NavLink to="./Intro2"><Button style={next}><i class="fas fa-long-arrow-alt-right"></i></Button></NavLink>
      </div>
    );
  }
}

export default Intro;
