import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const clearIngredients = () => {
  return {
    type: actionTypes.CLEAR_INGREDIENTS
  };
};

export const deleteGreeting = () => {
  return {
    type: actionTypes.DELETE_GREETING
  }
}


