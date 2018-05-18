import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, Alert } from 'reactstrap';
import Ingredient from '../Ingredient/Ingredient';

const pizza = (props) => {

  let ingredients = Object.keys(props.ingredients)
    .map(key => {
      return [...Array(props.ingredients[key])]
        .map((_, i) => {
          return <Ingredient key={key + i} type={key} />;
        });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  if (ingredients.length === 0) {
    ingredients = <Alert color="warning">Please start adding ingredients!</Alert>;
  }

  return (
    <Card className="mt-5 mb-5">
      <CardBody>
        {ingredients}
      </CardBody>
    </Card>
  );
};

export default withRouter(pizza);