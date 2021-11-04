import {ADD_PIZZA_CART} from '../types'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price += sum, 0)

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload]
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        }
      }
      const allPizzas = [].concat.apply([], Object.values(newItems))
      const totalPrice = getTotalPrice(allPizzas)

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice
      }
    }
    default:
      return state
  }
}

export default pizzas
