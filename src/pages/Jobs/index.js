import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import JobsItem from "../../components/JobsItem";
import jobs from "../../assets/jobs.json";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

import { Container, Row } from "react-materialize";

import "./styles.css";
import Icon from "react-materialize/lib/Icon";

export default class Jobs extends Component {
  constructor(props) {
    super(props);

    this.jobs = jobs.results;

    this.state = {
      chosenCategory: "consultoria",
      searchString: "",
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    this.setState({ results: this.jobs });
    return !this.props.location.state ? false : this.setCategory();
  }

  setCategory = () => {
    let category = this.props.location.state.category;
    document.querySelector(`[data-category=${category}]`).click();
  };

  setActive = event => {
    console.log(event);
    document
      .querySelector(".category-active")
      .classList.remove("category-active");
    event.target.classList.add("category-active");
    this.setState({ chosenCategory: event.target.dataset.category });
  };

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
                  autoComplete="off"
                />
                <label htmlFor="search" className="label-icon">
                  <Icon className="search-icons">search</Icon>
                </label>
                <i
                  className="material-icons close-icon"
                  onClick={this.cleanSearch}
                >
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
          <Categories handler={this.setActive} />
        </Row>
        <Row className="cards">
          {this.state.results.length > 0 ? (
            this.state.results.map((item, index) =>
              item.category === this.state.chosenCategory ||
              this.state.searchString !== "" ? (
                <JobsItem
                  title={item.title}
                  description={item.description}
                  term={this.state.searchString}
                  key={index}
                />
              ) : (
                false
              )
            )
          ) : this.state.searchString !== "" ? (
            <Container>
              <h3 className="result">
                Nenhum resultado para "{this.state.searchString}"
              </h3>
            </Container>
          ) : (
            ""
          )}
        </Row>
        <Footer />
      </div>
    );
  }
}
