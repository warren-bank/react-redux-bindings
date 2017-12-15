const A = (state = 1, action) => {
  switch (action.type) {
    case 'A':
      state++
    default:
      return state
  }
}

export default A
