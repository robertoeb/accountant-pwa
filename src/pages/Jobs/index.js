import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import JobsItem from "../../components/JobsItem";
import jobs from "../../assets/jobs.json";
import Footer from "../../components/Footer";

import { Container, Row } from "react-materialize";

import "./styles.css";
import Icon from "react-materialize/lib/Icon";

export default class Jobs extends Component {
  constructor(props) {
    super(props);

    this.jobs = jobs.results;
    this.state = {
      chosenCategory: "imposto-de-renda",
      searchString: "",
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ results: this.jobs });
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value }, () => {
      this.setState({ results: this.search() });
    });
  }

  search() {
    let filter = [];
    let term = this.state.searchString;
    let regex = new RegExp(term, "i");

    filter = jobs.results.filter(function(item) {
      if (regex.test(item.title) || regex.test(item.description)) return true;
      return false;
    });

    return filter;
  }

  cleanSearch = () => {
    this.setState({ searchString: "" });
    this.setState({ results: this.jobs });
  };

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
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field search-bar">
                <input
                  type="search"
                  id="search"
                  onChange={this.handleChange}
                  value={this.state.searchString}
                />
                <label htmlFor="search" className="label-icon">
                  <Icon className="search-icons">search</Icon>
                </label>
                <i className="material-icons" onClick={this.cleanSearch}>
                  close
                </i>
              </div>
            </form>
          </div>
        </nav>
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
        <Row className="cards">
          {this.state.results.length > 0 ? (
            this.state.results.map((item, index) => (
              <JobsItem
                title={item.title}
                description={item.description}
                term={this.state.searchString}
                key={index}
              />
            ))
          ) : this.state.searchString !== "" ? (
            <h3 className="result">
              Nenhum resultado para "{this.state.searchString}"
            </h3>
          ) : (
            ""
          )}
        </Row>
        <Footer />
      </div>
    );
  }
}
