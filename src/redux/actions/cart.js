import {ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM} from '../types'

export const addPizzaToCart = pizzaObj => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj
})

export const clearCart = pizzaObj => ({
  type: CLEAR_CART
})

export const removeCartItem = id => ({
  type: REMOVE_CART_ITEM,
  payload: id
})
