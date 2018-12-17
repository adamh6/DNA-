import React, { Component } from "react";
import { Row, Col, Button } from 'reactstrap';
import {
    NavLink,
  } from "react-router-dom";
import Wilkins from './Wilkins.jpg';

import Popup from 'reactjs-popup';

  const Trivia =  () => (
    <Popup trigger={<Button style={didYouKnow}> <i class="fas fa-info-circle"></i> Did you know?</Button>} position="left center" on="hover">
      <div class="popup" style={popupStyle}>The human genome contains 3 billion base pairs of DNA!</div>
    </Popup>
  )
  
  const Finish = () => (
      <Popup trigger={<Button style={next}> Finish!</Button>} modal>
      <div style={{textAlign: 'center'}}>
        <h2>You're done!</h2>
        <p>You're all caught up with the introduction.</p>
        <p>Feel free to repeat the course as much as you'd like!</p>
      </div>
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
  marginLeft: "3rem",
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
  marginBottom: '2rem',
    marginLeft: '3rem'
}

class Intro extends Component {

  render() {
   return (

      <div>
      <Trivia style={popupStyle}></Trivia>
        <Row style={rowStyle}>
          <Col lg="6" md="12">
          <h2>Conclusion</h2>
          <p>The study of these three functions of DNA, sheds light on the fundamentals of the
            manner in which living organisms maintain life. This is one of the reasons why the
            discovery of the structure of DNA by Watson, Crick and Wilkins had such a significant
            effect in the world of molecular biology. 
          </p>
        <p>This work was important not only to get to the
            root of the basis of life, but is also needed to give us better drugs to fight off so many
            diseases, some of which are extremely debilitating and lethal. </p>
        <p>Without knowledge of the
            structure of any of the biomolecules, it would be a very difficult task to work on the
            biochemistry of cellular reactions. Determining the DNA structure paved the way for
            these kinds of studies. It opened up the door to the world of microbiology, helping us
            visualize life at a biochemical level, and making us understand better how a cell
            functions.
        </p>
          </Col>
          <Col lg="6" md="12">
          <figure style={imageStyle}>
            <img src={Wilkins} alt="Maurice Wilkins" />
          <figcaption>Maurice Wilinks</figcaption>
          </figure>
          </Col>
        </Row>

        <NavLink to="./Intro2"><Button style={back}><i class="fas fa-long-arrow-alt-left"></i></Button></NavLink>
        <Finish></Finish>
      </div>
    );
  }
}

export default Intro;
