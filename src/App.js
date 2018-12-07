import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import ScrollToTop from './hoc/ScrollToTop';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/ristorante/">
        <ScrollToTop>
          <Layout>
            <Switch>
              <Route path="/checkout" component={asyncCheckout} />
              <Route path="/" exact component={PizzaBuilder} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
