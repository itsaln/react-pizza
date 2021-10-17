import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

import {setPizzas} from './redux/actions/pizzas'
import {Header} from './components'
import {Home, Cart} from './pages'

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact/>
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.pizzas.items,
  filters: state.filters
})

const mapDispatchToProps = dispatch => ({
  setPizzas: items => dispatch(setPizzas(items))
})

// Короткий запись
// const mapDispatchToProps = {
//   setPizzas
// }

export default connect(mapStateToProps, mapDispatchToProps)(App)
