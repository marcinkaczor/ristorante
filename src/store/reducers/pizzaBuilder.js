import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const INGREDIENT_PRICES = {
  cheddar: 1,
  olive: 0.5,
  parmezan: 2,
  pomodoro: 1,
  prosciutto: 4,
  rucola: 0.5
};

const initialState = {
  ingredients: {
    cheddar: 0,
    olive: 0,
    parmezan: 0,
    pomodoro: 0,
    prosciutto: 0,
    rucola: 0
  },
  totalPrice: 4,
  error: false,
  greeting: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredient = { [action.ingredientName]:state.ingredients[action.ingredientName] + 1 };
      const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
      return updateObject(state, updatedState)
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.CLEAR_INGREDIENTS:
      return {
        ...initialState,
        greeting: true
      }
    case actionTypes.DELETE_GREETING:
      return {
        ...state,
        greeting: false
      }
    default:
      return state;
  }
};

export default reducer;