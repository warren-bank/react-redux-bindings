import PropTypes  from 'prop-types'
import purify     from '../../higher-order/purify'
import Link       from './Link'

const FilterLink = ({activeFilter, filter, children}, {actions}) => {
  let active  = (activeFilter === filter)
  let onClick = () => actions.setVisibilityFilter(filter)
  let props   = {active, onClick}

  return (
    <Link {...props}>{children}</Link>
  )
}

FilterLink.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  filter:       PropTypes.string.isRequired
}

FilterLink.requireActions = ['setVisibilityFilter']

FilterLink.displayName = 'FilterLink'

export default purify(FilterLink)
