import React, { Component } from "react";
import { Row, Col, Button } from 'reactstrap';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import scientist from './scientist.png'

class Home extends Component {

  render() {
    const imageStyle = {
      // marginLeft: '3rem',
      width: '100%',
      height: '100%'
    }

    const quiz = {
      marginLeft: "auto",
      width: "300px",
      fontSize: "20px",
      marginTop: "30px",
      fontWeight: "700",
      borderRadius: "0"
    }
    return (
      <HashRouter>
      <div>
      <Row>
        <Col lg="6" md="6" sm="6">
          <h1>DNA</h1>
          <p><strong>Deoxyribonucleic acid</strong>, more commonly known as <strong>DNA</strong>,
          is a complex molecule that contains all of the information necessary to build
          and maintain an organism.</p>

          <p><strong>All living things</strong> have DNA within their cells. In fact,
          nearly every cell in a multicellular organism possesses the full
          set of DNA required for that organism!</p>

          <p><strong>Before you start the chapter, see if you can answer this bit of trivia!</strong></p>
          <NavLink to="./Quiz"><Button style={quiz} color="primary">Let's do it!</Button></NavLink>
        </Col>

        <Col lg="6" md="6" sm="6">
          <img src={scientist} style={imageStyle} alt="Scientist Graphic"/>
        </Col>
      </Row>
      </div>
      </HashRouter>
    );
  }
}

export default Home;
