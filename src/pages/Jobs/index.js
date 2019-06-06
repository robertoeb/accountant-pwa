import React, { Component } from "react";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

import { Container, Row, SideNavItem, Navbar } from "react-materialize";

import "./styles.css";
import logoMini from "../../assets/img/logo-mini.svg";
import userImage from "../../assets/img/user.png";
import sideNavBackground from "../../assets/img/background.jpg";

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex,
      chosenCategory: "imposto-de-renda"
    };
  }

  setActive = event => {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    this.setState({ chosenCategory: event.target.dataset.category });
    console.log(this.state.chosenCategory);
  };

  render() {
    return (
      <div className="jobs-body">
        <Navbar
          className="jobs-nav"
          brand={<img className="logo" src={logoMini} alt="Accountant Logo" />}
          centerLogo
          alignLinks="left"
          fixed
        >
          <div id="side-nav">
            <SideNavItem
              userView
              user={{
                background: sideNavBackground,
                image: userImage,
                name: "John Doe",
                email: "Contador"
              }}
            />
            <SideNavItem href="/jobs" icon="home">
              Início
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Seu trabalho</SideNavItem>
            <SideNavItem href="#!third" icon="check_circle">
              Trabalhos realizados
            </SideNavItem>
            <SideNavItem href="#!third" icon="build">
              Trabalhos em andamento
            </SideNavItem>
            <SideNavItem href="#!third" icon="search">
              Procurar trabalhos
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Suporte</SideNavItem>
            <SideNavItem href="#!third" icon="phone">
              +55 31 4949-0000
            </SideNavItem>
            <SideNavItem href="#!third" icon="help">
              Central de ajuda
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem waves href="/" icon="exit_to_app">
              Sair
            </SideNavItem>
          </div>
        </Navbar>

        <Navbar className="jobs-nav-search" search />

        <Container>
          <Row>
            <h1>Pesquisar por categoria</h1>
          </Row>
        </Container>
        <Row>
          <div className="categories">
            <div
              className="categories-item active"
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
