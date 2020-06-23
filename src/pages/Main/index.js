import "core-js/es/map";
import "core-js/es/set";
import "raf/polyfill";

import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Button, Icon } from "react-materialize";

import logo from "../../assets/img/logo.svg";
import "./styles.css";

const Main = () => (
  <div className="main-body">
    <Container className="main">
      <Row>
        <h1>BEM VINDO!</h1>
      </Row>
      <Row>
        <img src={logo} alt="" height="200px" className="responsive-img" />
      </Row>
      <Row>
        <Link to="login">
          <Button className="main-button button-grey" waves="light">
            FAZER LOGIN
            <Icon right>arrow_forward</Icon>
          </Button>
        </Link>
      </Row>
    </Container>
  </div>
);

export default Main;
