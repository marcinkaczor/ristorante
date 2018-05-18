import React from 'react';
import {
  Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup
} from 'reactstrap';

const buildControl = (props) => (
  <Col>
    <Card className="mb-3">
      <CardImg top width="100%" src={window.location.href + '/img/'+props.type+'.jpg'} alt={props.label} />
      <CardBody>
        <CardTitle>{props.label}</CardTitle>
        <CardSubtitle></CardSubtitle>
        <CardText></CardText>
        <ButtonGroup>
          <Button onClick={props.removed} disabled={props.disabled}>Less</Button>
          <Button onClick={props.added}>More</Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  </Col>
);

export default buildControl;