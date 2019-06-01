import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Button,
  Icon,
  TextInput,
  RadioGroup
} from "react-materialize";

import logoMini from "../../assets/img/logo-mini.svg";
import "./styles.css";

// import { Container } from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex,
      person: ""
    };
  }

  render() {
    return (
      <div className="login-body">
        <Container>
          <Row>
            <Link to="/">
              <Icon left medium className="back-icon">
                arrow_backward
              </Icon>
            </Link>
            <img src={logoMini} alt="Accountant Logo" className="logo-mini" />
          </Row>
          <Row>
            <RadioGroup
              name="person"
              options={[
                { label: "CPF", value: "cpf" },
                { label: "CNPJ", value: "cnpj" }
              ]}
            />
          </Row>
          <Row>
            <TextInput
              email
              validate
              placeholder="E-mail"
              className="input-field"
              id="input"
            />
          </Row>
          <Row>
            <TextInput
              password
              validate
              placeholder="Senha"
              className="input-field"
              id="input"
            />
          </Row>
          <Row>
            <Button type="submit" waves="light" className="button">
              Entrar
              <Icon right>send</Icon>
            </Button>
          </Row>
          <Row>
            <Link className="link" to="lost-password">
              <span className="text-right">Esqueci minha senha</span>
            </Link>
          </Row>
        </Container>
      </div>
    );
  }
}
