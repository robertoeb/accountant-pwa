import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-materialize";
import Icon from "react-materialize/lib/Icon";

export default class components extends Component {
  setTitle = () => {
    let category = this.props.data.chosenCategory;

    return " Imposto de Renda";
  };

  render() {
    return (
      <Container>
        <Row>
          <Col m={6} s={12}>
            <Card
              className="category-card"
              textClassName="white-text"
              title={
                <span>
                  <Icon>person</Icon> Departamento pessoal
                </span>
              }
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                Emissão de folha de pagamento a empresa hoje conta com 05
                colaboradores incluindo as duas sócias que tem pro-labore
                mínimo, guias de inss e fgts , empresa de terraplenagem com
                rateio de obras sistema dominio.
              </div>
            </Card>
            <Card
              className="category-card"
              textClassName="white-text"
              title={
                <span>
                  <Icon>person</Icon> Departamento pessoal
                </span>
              }
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                Emissão de folha de pagamento a empresa hoje conta com 05
                colaboradores incluindo as duas sócias que tem pro-labore
                mínimo, guias de inss e fgts , empresa de terraplenagem com
                rateio de obras sistema dominio.
              </div>
            </Card>
            <Card
              className="category-card"
              textClassName="white-text"
              title={
                <span>
                  <Icon>person</Icon> Departamento pessoal
                </span>
              }
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                Emissão de folha de pagamento a empresa hoje conta com 05
                colaboradores incluindo as duas sócias que tem pro-labore
                mínimo, guias de inss e fgts , empresa de terraplenagem com
                rateio de obras sistema dominio.
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
