import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import JobsItem from "../../components/JobsItem";
import jobs from "../../assets/jobs.json";
import Categories from "../../components/Categories";
import PageFooter from "../../components/PageFooter";

import { Container, Row } from "react-materialize";

import "./styles.css";
import Icon from "react-materialize/lib/Icon";

export default class Jobs extends Component {
  ss;
  constructor(props) {
    super(props);

    this.state = {
      chosenCategory: "all",
      searchString: "",
      results: [],
    };
  }

  componentDidMount() {
    this.setState({ results: jobs.results });

    if (this.props.location.state) {
      this.setCategory(this.props.location.state.category);
    }
  }

  setCategory = (category) => {
    const element = document.querySelector(`[data-category=${category}]`);
    element.click();
    element.classList.add("category-active");
    element.scrollIntoView();
  };

  setActive = (event) => {
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

    filter = jobs.results.filter(function (item) {
      if (regex.test(item.title) || regex.test(item.description)) return true;
      return false;
    });

    return filter;
  }

  cleanSearch = () => {
    this.setState({ searchString: "" });
    this.setState({ results: jobs.results });
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
              this.state.chosenCategory === "all" ||
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
        <PageFooter />
      </div>
    );
  }
}
