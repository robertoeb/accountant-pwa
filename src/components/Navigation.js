import React, { Component } from "react";
import { Navbar, SideNavItem } from "react-materialize";

import logoMini from "../../src/assets/img/logo-mini.svg";
import userImage from "../../src/assets/img/user.png";
import sideNavBackground from "../../src/assets/img/background.jpg";

export default class components extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="jobs-nav"
          brand={<img className="logo" src={logoMini} alt="Accountant Logo" />}
          centerLogo
          alignLinks="left"
          fixed
        >
          <div id="side-nav">
            <ul>
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
            </ul>
          </div>
        </Navbar>
        <Navbar className="jobs-nav-search" search />
      </div>
    );
  }
}
