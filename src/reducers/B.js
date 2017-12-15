const B = (state = 1, action) => {
  switch (action.type) {
    case 'B':
      state++
    default:
      return state
  }
}

export default B
