import React from "react";
import { Container, Row, Col, Card, Button } from "react-materialize";
import { Link } from "react-router-dom";

const JobsItem = ({ title, description }) => (
  <Container>
    <Row>
      <Col m={6} s={12}>
        <Card
          className="category-card"
          textClassName="white-text"
          title={title}
          actions={[
            <Link
              to={{
                pathname: "/proposal",
                state: { job: title }
              }}
            >
              <Button>FAZER UMA PROPOSTA</Button>
            </Link>
          ]}
        >
          <div className="card-description">{description}</div>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default JobsItem;
