import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-materialize";

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
                  Geração de conteúdo para blog e redes sociais de escritório de
                  contabilidade
                </span>
              }
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                Precisamos de geração de conteúdo como artigos científicos para
                blog e posts em redes sociais para um escritório de
                contabilidade, visando a captação de novos potenciais clientes
                com temas contábeis atualizados como abertura de empresa e
                notícias.
              </div>
            </Card>
            <Card
              className="category-card"
              textClassName="white-text"
              title={<span>Conteúdo Contábil para Blog</span>}
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                Criar conteúdos semanais para o blog com o objetivo de atrair
                visitantes.
              </div>
            </Card>
            <Card
              className="category-card"
              textClassName="white-text"
              title={
                <span>Contador para consultoria legalizar empresa parada</span>
              }
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                -Calcular os custos
                <br /> - orientar para legalizar empresa parada a 10 anos.
                <br /> -Mudar de ramo de atividade
                <br /> -excluir um sócio
                <br /> obs: fazer um relatório e planilha com custos. Caso de
                certo poderemos fechar negócio para cuidar da empresa
              </div>
            </Card>
            <Card
              className="category-card"
              textClassName="white-text"
              title={
                <span>Contador atualizado que tenha noção de tecnologia</span>
              }
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                Precisamos de um contador que tenha o CRC, seja atualizado no
                que diz respeito à tendencias do mercado contabil e suas
                possibilidades e, que tenha interesse em uma parceria. Somos
                focados no setor de consultoria de sistemas e, o projeto para a
                contabilidade seguirá a mesma linha.
              </div>
            </Card>
            <Card
              className="category-card"
              textClassName="white-text"
              title={
                <span>
                  Especialista Fiscal para parametrização de tributos em
                  E-commerce
                </span>
              }
              actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
            >
              <div className="card-description">
                Parametrizar sistema de e-commerce quanto as informações de
                impostos para a emissão de Notas fiscais, principalmente com
                Substituição tributária. Atuamos no segmento Ferramenta
                Diamantadas e estamos iniciando atividade em São Paulo. O
                sistema utilizado é o Bling.
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
