import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from '../../components/ContactData/ContactData';

class Checkout extends Component {

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            ingredients={this.props.ings} />
          <Route path={this.props.match.path + '/contact-data'}
            component={ContactData} />
        </div>
      );
    }
    return (
      <Container>
        {summary}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.pizzaBuilder.ingredients,
    purchased: state.order.purchased
  }
};

export default connect(mapStateToProps)(Checkout);