import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import axios from '../../axios-instance';
import errorHandler from '../../hoc/ErrorHandler';
import InitialOrder from '../../components/InitialOrder/InitialOrder';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/BuildControls/BuildControls';
import * as actions from './../../store/actions/index';

class PizzaBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      purchasing: false
    }
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });    
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push({pathname: '/checkout'});
  }

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let pizza = this.props.error ? <Alert color="danger" className="mt-5">Ingredients cannot be loaded!</Alert> : null;
    let orderSummary = null;
    if (this.props.ings) {
      pizza = (
        <Row>
          <Col lg="8" sm="12" xs="12">
            <BuildControls
              ingredientAdded={this.props.onIngredientAdded}
              ingredientRemoved={this.props.onIngredientRemoved}
              disabled={disabledInfo} />
          </Col>
          <Col lg="4" sm="12" xs="12">
            <Alert color="success" className="mt-5" isOpen={this.props.greeting} toggle={this.props.onDeleteGreeting}>
              Thank you for placing an order.
            </Alert>
            <InitialOrder
              ordered={this.purchaseHandler}
              price={this.props.price}
              purchasable={this.updatePurchaseState(this.props.ings)} />
            <Pizza
              ingredients={this.props.ings} />
          </Col>
        </Row>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price} />
      );
    }
    return (
      <Container>
        <Modal isOpen={this.state.purchasing} toggle={this.purchaseCancelHandler}>
          <ModalHeader toggle={this.purchaseCancelHandler}>Order Summary</ModalHeader>
          <ModalBody>
            {orderSummary}
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.purchaseContinueHandler}>Order</Button>{' '}
            <Button color="secondary" onClick={this.purchaseCancelHandler}>Cancel</Button>
          </ModalFooter>
        </Modal>
        {pizza}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.pizzaBuilder.ingredients,
    price: state.pizzaBuilder.totalPrice,
    error: state.pizzaBuilder.error,
    greeting: state.pizzaBuilder.greeting
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onDeleteGreeting: () => dispatch(actions.deleteGreeting())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(PizzaBuilder, axios));