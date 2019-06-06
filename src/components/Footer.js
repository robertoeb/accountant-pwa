import React, { Component } from "react";
import { Footer, Icon } from "react-materialize";

// import { Container } from './styles';

export default class components extends Component {
  render() {
    return (
      <Footer
        copyrights={
          <div>
            © 2019 Accountant
            <br />
            <a target="_blank" href="https://www.robertoeb.com">
              www.robertoeb.com
            </a>
          </div>
        }
        links={
          <ul>
            <li>
              <i class="fab fa-facebook-f" />
            </li>
            <li>
              <i class="fab fa-twitter" />
            </li>
            <li>
              <i class="fab fa-linkedin-in" />
            </li>
            <li>
              <i class="fab fa-pinterest-p" />
            </li>
            <li>
              <i class="fab fa-instagram" />
            </li>
          </ul>
        }
        className="main-footer"
      >
        <h5 className="white-text">Accountant</h5>
        <p className="grey-text text-lighten-4">Soluções Contábeis</p>
      </Footer>
    );
  }
}
