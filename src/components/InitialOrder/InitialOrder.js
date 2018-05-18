import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText } from 'reactstrap';

const initialOrder = (props) => {
  return (
    <Card className="mt-5">
      <CardBody>
        <CardTitle>Total Price:</CardTitle>
        <CardText>{props.price.toFixed(2)} $</CardText>
        <div className="text-right">
          <Button 
            color="secondary"
            disabled={!props.purchasable}
            onClick={props.ordered}
            >Order</Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default initialOrder;