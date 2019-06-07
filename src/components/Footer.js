import React, { Component } from "react";
import { Footer } from "react-materialize";

export default class components extends Component {
  render() {
    return (
      <Footer
        copyrights="© 2019 Accountant"
        links={
          <ul>
            <li>
              <i className="fab fa-facebook-f" />
            </li>
            <li>
              <i className="fab fa-twitter" />
            </li>
            <li>
              <i className="fab fa-linkedin-in" />
            </li>
            <li>
              <i className="fab fa-pinterest-p" />
            </li>
            <li>
              <i className="fab fa-instagram" />
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
