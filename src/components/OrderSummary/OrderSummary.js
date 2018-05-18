import React, { Component } from 'react';

class OrderSummary extends Component {
  
  render() {

    const ingredients = Object.keys(this.props.ingredients)
    .map(key => {
      return <li key={key}><span>{key}</span>: {this.props.ingredients[key]}</li>;
    });

    return (
      <div>
        <p>A delicious pizza with the following ingredients:</p>
        <ul>
          {ingredients}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
      </div>
    );
  }
}

export default OrderSummary;