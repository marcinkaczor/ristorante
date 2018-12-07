import React from 'react';
import { Button } from 'reactstrap';
import Pizza from '../Pizza/Pizza';

const checkoutSummary = (props) => {
  return (
    <div className="my-5">
      <h3>We hope it tastes well!</h3>
      <Pizza ingredients={props.ingredients}/>
      <div className="my-5">
        <Button color="secondary" onClick={props.checkoutCancelled}>Cancel</Button>{' '}
        <Button color="success" onClick={props.checkoutContinued}>Continue</Button>
      </div>
    </div>
  );
}

export default checkoutSummary;