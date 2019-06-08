import React from "react";
import { Container, Row, Col, Card, Button } from "react-materialize";

const JobsItem = ({ title, description, category }) => (
  <Container>
    <Row>
      <Col m={6} s={12}>
        <Card
          className="category-card"
          textClassName="white-text"
          title={title}
          actions={[<Button waves="light">FAZER UMA PROPOSTA</Button>]}
        >
          <div className="card-description">{description}</div>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default JobsItem;
