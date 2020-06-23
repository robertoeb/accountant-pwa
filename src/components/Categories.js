import React from "react";

const Categories = ({ handler }) => (
  <div className="categories">
    <div
      className="categories-item category-active"
      data-category="all"
      onClick={handler}
    >
      <span>Todas</span>
    </div>
    <div
      className="categories-item"
      data-category="consultoria"
      onClick={handler}
    >
      <span>Consultoria</span>
    </div>
    <div className="categories-item" data-category="finanças" onClick={handler}>
      <span>Finanças</span>
    </div>
    <div
      className="categories-item"
      data-category="abrir-empresa"
      onClick={handler}
    >
      <span>Abrir empresa</span>
    </div>
    <div
      className="categories-item"
      data-category="auditoria"
      onClick={handler}
    >
      <span>Auditoria</span>
    </div>
  </div>
);

export default Categories;
