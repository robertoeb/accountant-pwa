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
      person: "",
      formRender: false
    };
  }

  handleRadioGroup = event => {
    this.setState({ person: event.target.value });
    document.querySelector(".form").style.display = "block";
    document.querySelector(".form").placeholder = "Teste";
  };

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
              value={this.state.value}
              onChange={this.handleRadioGroup}
              options={[
                { label: "CPF", value: "cpf" },
                { label: "CNPJ", value: "cnpj" }
              ]}
            />
          </Row>
          <Row className="form">
            <TextInput type="number" className="input-field" id="input" />
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
