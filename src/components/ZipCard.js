import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ZipCard = (props) => {
  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col className="bg-dark rounded">
            <h5 className="my-2">{props.LocationText}</h5>
          </Col>
        </Row>
          <Row>
            <Col className="border border-dark p-4 rounded">
              <ul>
                <li>State: {props.State}</li>
                <li>Location: ({props.Lat}, {props.Long})</li>
                <li>Population (estimated): {props.EstimatedPopulation}</li>
                <li>Total Wages: {props.TotalWages}</li>
              </ul>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ZipCard;
