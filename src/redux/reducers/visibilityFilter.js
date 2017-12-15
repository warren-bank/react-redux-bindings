import constants from '../data/constants'

const C = constants.actions

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
