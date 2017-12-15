import PropTypes  from 'prop-types'
import purify     from '../../higher-order/purify'
import AddTodo    from './AddTodo'
import TodoList   from './TodoList'
import Footer     from './Footer'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const App = ({state}, context) => {
  let todos  = getVisibleTodos(state.todos, state.visibilityFilter)

  return (
    <div>
      <AddTodo />
      <TodoList todos={todos} />
      <Footer visibilityFilter={state.visibilityFilter} />
    </div>
  )
}

App.propTypes = {
  state: PropTypes.object.isRequired
}

export default purify(App)
