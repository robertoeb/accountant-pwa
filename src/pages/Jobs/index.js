import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

import { Container, Row } from "react-materialize";

import "./styles.css";

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex,
      chosenCategory: "imposto-de-renda"
    };
  }

  setActive = event => {
    document
      .querySelector(".category-active")
      .classList.remove("category-active");
    event.target.classList.add("category-active");
    this.setState({ chosenCategory: event.target.dataset.category });
    console.log(this.state.chosenCategory);
  };

  render() {
    return (
      <div className="jobs-body">
        <Navigation />
        <Container>
          <Row>
            <h1>Pesquisar por categoria</h1>
          </Row>
        </Container>
        <Row>
          <div className="categories">
            <div
              className="categories-item category-active"
              data-category="consultoria"
              onClick={this.setActive}
            >
              <span>Consultoria</span>
            </div>
            <div
              className="categories-item"
              data-category="finanças"
              onClick={this.setActive}
            >
              <span>Finanças</span>
            </div>
            <div
              className="categories-item"
              data-category="imposto-de-renda"
              onClick={this.setActive}
            >
              <span>Imposto de renda</span>
            </div>
            <div
              className="categories-item"
              data-category="abrir-empresa"
              onClick={this.setActive}
            >
              <span>Abrir empresa</span>
            </div>
            <div
              className="categories-item"
              data-category="consultoria"
              onClick={this.setActive}
            >
              <span>Consultoria</span>
            </div>
          </div>
        </Row>
        <Row>
          <Categories data={this.state} />
        </Row>
        <Footer />
      </div>
    );
  }
}
