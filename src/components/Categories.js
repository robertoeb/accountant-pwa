import React, { Component } from "react";

export default class components extends Component {
  render() {
    return (
      <div className="categories">
        <div
          className="categories-item category-active"
          data-category="consultoria"
          onClick={this.props.handler}
        >
          <span>Consultoria</span>
        </div>
        <div
          className="categories-item"
          data-category="finanças"
          onClick={this.props.handler}
        >
          <span>Finanças</span>
        </div>
        <div
          className="categories-item"
          data-category="abrir-empresa"
          onClick={this.props.handler}
        >
          <span>Abrir empresa</span>
        </div>
        <div
          className="categories-item"
          data-category="auditoria"
          onClick={this.props.handler}
        >
          <span>Auditoria</span>
        </div>
      </div>
    );
  }
}
