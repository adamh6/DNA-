import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Intro2 from "./pages/Intro2";
import Quiz from "./pages/Quiz";
import Timeline from "./pages/Timeline";
import Conclusion from "./pages/Conclusion";
import icon from "./icon.png";

import PageShell from './components/PageShell';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';

class Main extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const navStyle = {
      marginBottom: '1em',
      background: '#3CC',
    }

    const navItemStyle = {
      color: '#333',
      borderBottom: '1px solid #778899'
    }

    const imageStyle = {
      height: '40px',
      width: '40px'
    }

    return (
      <HashRouter>
        <div>
        <Navbar style = {navStyle} light expand="md">
          <NavbarBrand href="/"><img src={icon} style={imageStyle} className='logo' alt="DNA Icon"/>Adam</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem style={navItemStyle}>
                <NavLink to="/Home">Home</NavLink>
              </NavItem>
              <NavItem style={navItemStyle}>
                <NavLink to="/Quiz">Quiz</NavLink>
              </NavItem>
              <NavItem style={navItemStyle}>
              <NavLink to="/Timeline">Timeline</NavLink>
              </NavItem>
              <NavItem style={navItemStyle}>
              <NavLink to="/Intro">Intro</NavLink>(<NavLink to="/Intro"> 1 </NavLink>,<NavLink to="/Intro2"> 2 </NavLink>)
                </NavItem>
              <NavItem style={navItemStyle}>
              <NavLink to="/Conclusion">Conclusion</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path="/" component={PageShell(Home)}/>
        <Route exact path="/Home" component={PageShell(Home)}/>
        <Route exact path="/Quiz" component={PageShell(Quiz)}/>
        <Route exact path="/Intro" component={PageShell(Intro)}/>
        <Route exact path="/Intro2" component={PageShell(Intro2)}/>
        <Route exact path="/Conclusion" component={PageShell(Conclusion)}/>
        <Route exact path="/Timeline" component={PageShell(Timeline)}/>
        </div>
        </HashRouter>
    );
  }
}

export default Main;
