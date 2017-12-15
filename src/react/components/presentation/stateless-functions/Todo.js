import PropTypes  from 'prop-types'
import purify     from '../../higher-order/purify'

const Todo = ({onClick, completed, text}, context) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default purify(Todo)