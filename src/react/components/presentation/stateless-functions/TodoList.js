import PropTypes  from 'prop-types'
import purify     from '../../higher-order/purify'
import Todo       from './Todo'

const TodoList = ({todos}, {actions}) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => actions.toggleTodo(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

TodoList.requireActions = ['toggleTodo']

export default purify(TodoList)
