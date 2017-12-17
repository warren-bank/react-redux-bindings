import PropTypes  from 'prop-types'
import purify     from '../../higher-order/purify'
import FilterLink from './FilterLink'

const Footer = ({visibilityFilter}, context) => (
  <p>
    Show:
    {' '}
    <FilterLink activeFilter={visibilityFilter} filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink activeFilter={visibilityFilter} filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink activeFilter={visibilityFilter} filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

Footer.propTypes = {
  visibilityFilter: PropTypes.string.isRequired
}

Footer.displayName = 'Footer'

export default purify(Footer)
