import {SET_PIZZAS, SET_LOADED} from '../types'
import axios from 'axios'

export const setLoaded = value => ({
  type: SET_LOADED,
  payload: value
})

// export const fetchPizzas = (sortBy, category) => dispatch => {
//   dispatch(setLoaded(false))
//   axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&order=${sortBy.order}`)
//     .then(({data}) => dispatch(setPizzas(data)))
// }

export const fetchPizzas = () => dispatch => {
  dispatch(setLoaded(false))
  axios.get('https://react-pizza-6ada5-default-rtdb.asia-southeast1.firebasedatabase.app/pizzas.json')
    .then(({data}) => dispatch(setPizzas(data)))
}

export const setPizzas = items => ({
  type: SET_PIZZAS,
  payload: items
})
