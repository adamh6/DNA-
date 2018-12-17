import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
import Popup from 'reactjs-popup';
import {Button} from 'reactstrap';

  const Trivia =  () => (
    <Popup trigger={<Button style={didYouKnow}><i class="fas fa-info-circle"></i> Did you know?</Button>} position="left center" on="hover">
      <div class="popup" style={popupStyle}>Your DNA could stretch from the earth to the sun and back 600 times!</div>
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

const didYouKnow = {
  position: 'absolute',
  top: '10',
  right: '0',
  border: 'none',
  background: 'none',
  color: '#778899'
}

class Intro extends Component {
  render() {
    return (
      <div>
      <Trivia style={popupStyle}></Trivia>
      <h1> DNA Discovery Timeline </h1>
      <h2>Ever wondered how DNA was discovered?
      Below is a brief sequence of important historical events that led to its discovery.</h2>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="1859"
          style={{ color: '#e86971' }}
        >
          <h3 style={{marginBottom: '1rem', color: '#e86971'}}>Charles Darwin publishes The Origin of Species</h3>
          <p>
            In 1859, Charles Darwin published The Origin of Species, changing the way many people viewed the world forever.
          </p>
          <p>
            The book was extremely controversial, as it challenged the dominant view of the period that many people literally
            took that God had created the world in seven days. It also suggested that people were animals and might have evolved
            from apes this part of his work has been shown to be inaccurate.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="1866"
          dateInnerStyle={{ background: '#71B', color: '#FFF' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#71B', marginBottom: '1rem' }}>Gregor Mendel discovers the basic principles of genetics</h3>
          <p>
            In 1866, an unknown Augustinian monk was the first person to shed light on the way in which
            characteristics are passed down the generations.</p>

            <p>Today, he is widely considered to be the father of genetics.
            However, he enjoyed no such notoriety during his lifetime, with his discoveries largely passing the scientific
            community by. In fact, he was so ahead of the game that it took three decades for his paper to be taken seriously.
          </p>
        </TimelineItem>
        <TimelineItem
        dateText="1869"
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
        >
          <h3 style={{marginBottom: '1rem', color: '#61b8ff'}}>Friedrich Miescher identifies "nuclein"</h3>
          <p>
            In 1869, Swiss physiological chemist Friedrich Miescher first identified what he called "nuclein" in the
            nuclei of human white blood cells, which we know today as deoxyribonucleic acid (DNA).
          </p>
          <p>
            However, during the process, he came across a substance that had unusual chemical properties unlike the
            proteins he was searching for, with very high phosphorous content and a resistance to protein digestion.
          </p>
          <p>
            Miescher quickly realised that he had discovered a new substance and sensed the importance of his findings.
            Despite this, it took more than 50 years for the wider scientific community to appreciate his work.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="1953"
          dateInnerStyle={{ background: '#76bb7f' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{marginBottom: "1rem", color: '#76bb7f'}}>James Watson and Francis Crick discover the double helix structure of DNA</h3>
          <p>
            In 1951, James Watson visited Cambridge University and happened to meet Francis Crick.
            Despite an age difference of 12 years, the pair immediately hit it off and Watson
            remained at the university to study the structure of DNA at Cavendish Laboratory.
          </p>
        </TimelineItem>
      </Timeline>

      <NavLink to="./Quiz"><Button style={back}><i class="fas fa-long-arrow-alt-left"></i></Button></NavLink>
      <NavLink to="./Intro"><Button style={next}><i class="fas fa-long-arrow-alt-right"></i></Button></NavLink>
      </div>
    );
  }
}

export default Intro;
