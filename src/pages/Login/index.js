import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Row, Button, Icon, TextInput } from "react-materialize";

import logoMini from "../../assets/img/logo-mini.svg";
import "./styles.css";

// import { Container } from './styles';

export default class Login extends Component {
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
            <TextInput
              email
              validate
              placeholder="E-mail"
              className="input-field"
              value="jhondoe@mail.com"
              readOnly
            />
          </Row>
          <Row>
            <TextInput
              password
              validate
              placeholder="Senha"
              className="input-field"
              value="*******"
              readOnly
            />
          </Row>
          <Row>
            <Link to="home">
              <Button type="submit" className="button">
                Entrar
                <Icon right>send</Icon>
              </Button>
            </Link>
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
