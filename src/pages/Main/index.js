import React, { Component } from "react";

import { Container, Navbar, NavItem, SearchForm, Row } from "react-materialize";

import "./styles.css";
import logoMini from "../../assets/img/logo-mini.svg";

export default class Main extends Component {
  onClick = () => {};

  render() {
    return (
      <div className="main-body">
        <Navbar
          className="main-nav"
          brand={<img className="logo" src={logoMini} alt="Accountant Logo" />}
          alignLinks="right"
          fixed
        >
          <NavItem onClick={this.onClick}>Getting started</NavItem>
          <NavItem href="components.html">Components</NavItem>
        </Navbar>
        <SearchForm />
        <Container>
          <Row>
            <h1>Pesquisar por categoria</h1>
          </Row>
        </Container>
        <Row className="categories-row">
          <div className="categories">
            <div className="categories-item" active>
              <div className="categories-item-content">Imposto de renda</div>
            </div>
            <div className="categories-item">
              <div className="categories-item-content">Abrir empresa</div>
            </div>
            <div className="categories-item">
              <div className="categories-item-content">Consultoria</div>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
