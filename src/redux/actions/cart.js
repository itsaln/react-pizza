import {ADD_PIZZA_CART} from '../types'

export const addPizzaToCart = pizzaObj => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj
})
