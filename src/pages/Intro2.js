import React, { Component } from "react";
import { Row, Col, Button } from 'reactstrap'
import helix from './dna.gif';
import {
    NavLink,
  } from "react-router-dom";
import Popup from 'reactjs-popup';

  const Trivia =  () => (
    <Popup trigger={<Button style={didYouKnow}> <i class="fas fa-info-circle"></i> Did you know?</Button>} position="left center" on="hover">
      <div class="popup" style={popupStyle}>Genes make up only about 3 percent of your DNA.</div>
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
  padding: "0",
}

const imageStyle = {
  maxWidth: "100%",
  marginLeft: "auto",
  marginTop: "3rem",
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

class Intro2 extends Component {
  render() {
    return (

      <div id="intro">
      <Trivia style={popupStyle}></Trivia>
        <Row style={rowStyle}>
          <Col lg="6" md="12">
          <h2>Introduction (Cont)</h2>
          <ol>
            <li>Replication of the DNA was relatively easy to demonstrate with the double helix.</li>
            <li>They knew that proteins were the molecules that carried out day-to-day chores of
                the cell. Thus, they knew that DNA carried the information required to properly
                construct the proteins, and that RNA copied and carried this genetic information
                to the sight of protein synthesis. This is the central dogma of life.</li>
            <li>The role of mutations and how these mutations are incorporated into the DNA
                molecule and how these then affect the evolution, or slow change of the
                population of organisms over time, was the last function to be breached.</li>
          </ol>
          </Col>
          <Col lg="6" md="12">
          <figure>
            <img src={helix} style={imageStyle} alt="Double Helix" />
            <figcaption>The double helix</figcaption>
          </figure>
          </Col>
        </Row>

        <NavLink to="./Intro"><Button style={back}><i class="fas fa-long-arrow-alt-left"></i></Button></NavLink>
        <NavLink to="./Conclusion"><Button style={next}><i class="fas fa-long-arrow-alt-right"></i></Button></NavLink>
      </div>
    );
  }
}

export default Intro2;
