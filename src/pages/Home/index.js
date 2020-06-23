import React from "react";
import Navigation from "../../components/Navigation";
import PageFooter from "../../components/PageFooter";
import { Link } from "react-router-dom";

import { Container, Button, Row, Carousel } from "react-materialize";

import "./styles.css";
import hiw01 from "../../assets/img/how-it-works-1.be2cbf2fb.svg";
import hiw02 from "../../assets/img/how-it-works-2.95002a559.svg";
import hiw03 from "../../assets/img/how-it-works-3.74751c2da.svg";
import hiw04 from "../../assets/img/how-it-works-4.073650aac.svg";
import dave from "../../assets/img/dave.jpg";
import raquel from "../../assets/img/raquel.png";
import gloria from "../../assets/img/gloria.jpg";

const Home = () => (
  <div className="main-home">
    <Navigation />
    <div className="main-hero">
      <Container>
        <h1>Contabilidade Online</h1>
        <p className="mt-30">
          Aqui você enconta contadores freelancers prontos para trabalhar no seu
          projeto.
        </p>
        <Link
          to={{
            pathname: "/jobs",
            state: { category: "consultoria" },
          }}
        >
          <Button className="mt-30 wd-100">Prestamos consultoria</Button>
        </Link>
        <Link
          to={{
            pathname: "/jobs",
            state: { category: "finanças" },
          }}
        >
          <Button className="mt-30 wd-100">Cuidamos das suas finanças</Button>
        </Link>
        <Link
          to={{
            pathname: "/jobs",
            state: { category: "abrir-empresa" },
          }}
        >
          <Button className="mt-30 wd-100">Abrimos sua empresa</Button>
        </Link>
        <Link
          to={{
            pathname: "/jobs",
            state: { category: "auditoria" },
          }}
        >
          <Button className="mt-30 wd-100">Fazemos auditoria</Button>
        </Link>
      </Container>
    </div>
    <section className="how-it-works">
      <Container>
        <h1 className="mt-30 ">Como funciona?</h1>
        <Row className="hiw-items mt-30">
          <img
            className="img-responsive"
            alt="Publicar"
            src={hiw01}
            height="60px"
          />
          <div>
            <strong>Publicar</strong>
            <p>
              Conte-nos em poucas palavras o que você precisa. É grátis e sem
              compromisso!
            </p>
          </div>
        </Row>
        <Row className="hiw-items mt-30">
          <img
            className="img-responsive"
            alt="Selectionar"
            src={hiw02}
            height="60px"
          />
          <div>
            <strong>Selecionar</strong>
            <p>
              Receba propostas de excelentes contadores. Escolha o melhor para o
              seu projeto.
            </p>
          </div>
        </Row>
        <Row className="hiw-items mt-30">
          <img
            className="img-responsive"
            alt="Selectionar"
            src={hiw03}
            height="60px"
          />
          <div>
            <strong>Começar</strong>
            <p>
              Você faz o pagamento com total garantia sobre o valor depositado e
              já começa a trabalhar.
            </p>
          </div>
        </Row>
        <Row className="hiw-items mt-30">
          <img
            className="img-responsive"
            alt="Selectionar"
            src={hiw04}
            height="60px"
          />
          <div>
            <strong>Aceitar</strong>
            <p>
              Receba o projeto concluído e libere o valor depositado ao
              contador.
            </p>
          </div>
        </Row>
      </Container>
    </section>
    <section>
      <Carousel
        options={{ fullWidth: true, indicators: true }}
        className="white-text center"
      >
        <div className="bg-red">
          <Container>
            <div className="testimonial-author mt-30">
              <img src={dave} className="img-responsive circle" alt="Dave" />
              <div className="author-description">
                <h2>Dave Passos</h2>
                <p className="author-company">Ger. de contabilidade na ACME</p>
              </div>
            </div>
            <p>
              Graças a Accountant, alcançamos resultados incríveis em pouco
              tempo . Sem ter que contratar um profissional dentro da
              organização ou investir em capacitação.
            </p>
          </Container>
        </div>
        <div className="bg-gray">
          <Container>
            <div className="testimonial-author mt-30">
              <img
                src={gloria}
                className="img-responsive circle"
                alt="Gloria"
              />
              <div className="author-description">
                <h2>Gloria Fernandes</h2>
                <p>CEO na Bolos Fernandes</p>
              </div>
            </div>
            <p>
              A Accountant se transformou em uma ferramenta inestimável nas
              contratações de contadores freelancers em minha empresa. Sem
              dúvida é o maior mercado de talentos do Brasil!
            </p>
          </Container>
        </div>
        <div className="bg-red">
          <Container>
            <div className="testimonial-author mt-30">
              <img
                src={raquel}
                className="img-responsive circle"
                alt="Raquel"
              />
              <div className="author-description">
                <h2>Raquel Oliveira</h2>
                <p>CEO na Contabilidade Oliver</p>
              </div>
            </div>
            <p>
              Na Accountant contrato vários profissionais ao mesmo tempo, assim
              não há atrasos e o resultado é sempre muito bom. Claro que tive
              problemas, mas tenho autonomia para resolver e partir para um
              próximo freelancer.
            </p>
          </Container>
        </div>
      </Carousel>
    </section>
    <PageFooter />
  </div>
);

export default Home;
