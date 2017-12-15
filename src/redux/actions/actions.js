import constants from '../data/constants'

const C = constants.actions

let nextTodoId = 0
export const addTodo = text => {
  return {
    type: C.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: C.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: C.TOGGLE_TODO,
    id
  }
}
