import React from "react";
import { Navbar, SideNavItem, Icon } from "react-materialize";

import logoMini from "../../src/assets/img/logo-mini.svg";
import userImage from "../../src/assets/img/user.png";
import sideNavBackground from "../../src/assets/img/background.jpg";

const Navigation = () => (
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
            email: "Contador",
          }}
        />
        <SideNavItem href="/home" icon={<Icon>home</Icon>}>
          Início
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Seu trabalho</SideNavItem>
        <SideNavItem href="#!third" icon={<Icon>check_circle</Icon>}>
          Trabalhos realizados
        </SideNavItem>
        <SideNavItem href="#!third" icon={<Icon>build</Icon>}>
          Trabalhos em andamento
        </SideNavItem>
        <SideNavItem href="jobs" icon={<Icon>search</Icon>}>
          Procurar trabalhos
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Suporte</SideNavItem>
        <SideNavItem icon={<Icon>phone</Icon>}>+55 31 4949-0000</SideNavItem>
        <SideNavItem icon={<Icon>help</Icon>}>Central de ajuda</SideNavItem>
        <SideNavItem divider />
        <SideNavItem waves href="/" icon={<Icon>exit_to_app</Icon>}>
          Sair
        </SideNavItem>
      </ul>
    </div>
  </Navbar>
);

export default Navigation;
