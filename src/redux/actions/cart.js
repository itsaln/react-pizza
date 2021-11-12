import {ADD_PIZZA_CART, CLEAR_CART, DECREMENT_CART_ITEM, INCREMENT_CART_ITEM, REMOVE_CART_ITEM} from '../types'

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

export const incrementCartItem = id => ({
  type: INCREMENT_CART_ITEM,
  payload: id
})

export const decrementCartItem = id => ({
  type: DECREMENT_CART_ITEM,
  payload: id
})
