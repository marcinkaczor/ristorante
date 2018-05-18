import axios from '../../axios-instance';
import { clearIngredients } from './pizzaBuilder';
import * as actionTypes from './actionTypes';

export const purchasePizzaStart = () => {
  return {
    type: actionTypes.PURCHASE_PIZZA_START
  };
};

export const purchasePizzaSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_PIZZA_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchasePizzaFail = (error) => {
  return {
    type: actionTypes.PURCHASE_PIZZA_FAIL,
    error: error
  };
};

export const purchasePizza = (orderData) => {
  return dispatch => {
    dispatch(purchasePizzaStart());
    axios.post('/posts', orderData)
      .then(response => {
        dispatch(purchasePizzaSuccess(response.data.name, orderData));
        dispatch(clearIngredients());
      })
      .catch(error => {
        dispatch(purchasePizzaFail(error));
        dispatch(clearIngredients());
      });
  }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};
