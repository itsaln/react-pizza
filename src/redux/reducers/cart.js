import {ADD_PIZZA_CART, CLEAR_CART, DECREMENT_CART_ITEM, INCREMENT_CART_ITEM, REMOVE_CART_ITEM} from '../types'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.')
  return keys.reduce((val, key) => {
    return val[key]
  }, obj[firstKey])
}

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path)
    return sum + value
  }, 0)
}

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        }
      }

      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }
    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items
      }

      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentTotalCount = newItems[action.payload].items.length
      delete newItems[action.payload]

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      }
    }
    case INCREMENT_CART_ITEM: {
      const newItems = [...state.items[action.payload].items, state.items[action.payload].items[0]]
      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems)
          },
          totalCount,
          totalPrice
        }
      }
    }
    case DECREMENT_CART_ITEM: {
      const oldItems = state.items[action.payload].items
      const newItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems)
          },
          totalCount,
          totalPrice
        }
      }
    }
    case CLEAR_CART:
      return {totalPrice: 0, totalCount: 0, items: {}}
    default:
      return state
  }
}

export default pizzas
