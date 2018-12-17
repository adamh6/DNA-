import React, { Component } from "react";
import { Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'
import {
    NavLink,
  } from "react-router-dom";
import dnagif from "../dnagif.svg";

function QuizCard(props){
  return (
      <Card style={cardStyle}>
      <CardImg top width="100%" src={props.image} alt="Card image cap" style={imageStyle} />
      <CardBody>
        <CardTitle style={titleStyle}>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
        <Button onClick={props.click} style={answerStyle}>Answer</Button>
      </CardBody>
      </Card>
  )
}

const cardStyle = {
  marginBottom: '5rem',
  textAlign: 'center',
  borderRadius: '10%',
  // background: '#D3D3D3'
}

const imageStyle = {
  height: "100px",
  border: 'none'
}

const titleStyle = {
  fontWeight: "900",
  fontSize: "25px",
  color: "#26466D"
}

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

const answerStyle = {
  background: 'none',
  color: 'black',
  borderRadius: '0'
}

class Quiz extends Component {

  state = {
    text: [
      { id: 0, question: 'Click to see the answer'},
      { id: 1, question: 'Click to see the answer'},
      { id: 2, question: 'Click to see the answer'},
      { id: 3, question: 'Click to see the answer'}
    ]
  }
    showAnswer = (id) => {

      let a = [
        'You\'re quite a bit off the mark.',
        'Almost, but not quite!',
        'Getting warmer!',
        'You got it! Good job. DNA was first discovered by Swiss physiological chemist, Friedrich Miescher.'
      ]

      const textIndex = this.state.text.findIndex(p => {
        return p.id === id;
      });

      const answer = {
        ...this.state.text[textIndex]
      };

      answer.question = a[textIndex];

      const answers = [...this.state.text];
      answers[textIndex] = answer;

      this.setState( {text: answers} );
    }

  render() {
    return (
      <div>
        <h3>When was DNA first discovered?</h3>
        <Row>
        <Col lg="3" sm="6">
              <QuizCard
                    image = {dnagif}
                    title='400 B.C.'
                    text = {this.state.text[0].question}
                    click = {this.showAnswer.bind(this, 0)}/></Col>
        <Col lg="3" sm="6">
              <QuizCard
                    image = {dnagif}
                    title='1782'
                    text = {this.state.text[1].question}
                    click = {this.showAnswer.bind(this, 1)}/></Col>
        <Col lg="3" sm="6">
              <QuizCard
                    image = {dnagif}
                    title='1983'
                    text = {this.state.text[2].question}
                    click = {this.showAnswer.bind(this, 2)}/></Col>
        <Col lg="3" sm="6">
              <QuizCard
                    image = {dnagif}
                    title='1869'
                    text = {this.state.text[3].question}
                    click = {this.showAnswer.bind(this, 3)}/></Col>
      </Row>
      <NavLink to="./Home"><Button style={back}><i class="fas fa-long-arrow-alt-left"></i></Button></NavLink>
      <NavLink to="./Timeline"><Button style={next}><i class="fas fa-long-arrow-alt-right"></i></Button></NavLink>
      </div>
    );
  }
}

export default Quiz;
