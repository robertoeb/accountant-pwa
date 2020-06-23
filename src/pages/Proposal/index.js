import React from "react";
import Navigation from "../../components/Navigation";
import PageFooter from "../../components/PageFooter";
import { Link } from "react-router-dom";

import {
  Container,
  TextInput,
  Textarea,
  Row,
  Button,
  Icon,
  Modal,
} from "react-materialize";

import "./styles.css";

const Proposal = () => (
  <div className="main-proposal">
    <Navigation />
    <Container>
      <Row className="top-proposal">
        <h1>
          Fazendo proposta para
          <br />
        </h1>
        <p>{this.props.location.state.job}</p>
      </Row>
      <Row>
        <TextInput
          className="input-field"
          label="Valor da proposta"
          type="number"
        />
      </Row>
      <Row>
        <Textarea className="input-field" label="Digite uma mensagem" />
      </Row>
      <Row>
        <Modal
          header="Proposta enviada!"
          trigger={
            <Button className="button" type="submit">
              Enviar
              <Icon right>send</Icon>
            </Button>
          }
        >
          <img
            src="https://sssc.vic.edu.au/wp-content/uploads/2018/08/checkmark.gif"
            alt="enviado"
            height="100px"
          />
          <Row>
            <Link to="/jobs">Voltar</Link>
          </Row>
        </Modal>
      </Row>
      <Row>
        <Link to="/jobs">
          <Button className="button">
            Cancelar
            <Icon right>cancel</Icon>
          </Button>
        </Link>
      </Row>
    </Container>
    <PageFooter />
  </div>
);

export default Proposal;
