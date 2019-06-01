import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Button, Icon } from "react-materialize";

import logo from "../../assets/img/logo.svg";
import "./styles.css";

export default class Main extends Component {
  render() {
    return (
      <div className="main-body">
        <Container className="main">
          <Row>
            <h1>BEM VINDO!</h1>
          </Row>
          <Row>
            <img src={logo} alt="" height="250px" className="responsive-img" />
          </Row>
          <Row>
            <Link to="register">
              <Button className="main-button" waves="light">
                MINHA PRIMEIRA VEZ
                <Icon right>arrow_forward</Icon>
              </Button>
            </Link>
          </Row>
          <Row>
            <Link to="login">
              <Button className="main-button button-grey" waves="light">
                JÁ SOU CLIENTE
                <Icon right>arrow_forward</Icon>
              </Button>
            </Link>
          </Row>
        </Container>
      </div>
    );
  }
}
