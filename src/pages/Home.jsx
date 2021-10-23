import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory} from '../redux/actions/filters'
import {fetchPizzas} from '../redux/actions/pizzas'
import {Categories, SortPopup, PizzaBlock} from '../components'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItem = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'}
]

function Home() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [])

  const items = useSelector(({pizzas}) => pizzas.items)

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [dispatch])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}/>
        <SortPopup items={sortItem}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(obj => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  )
}

export default Home
