import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

window.React = React

const logger = store => next => action => {
  console.log('Redux action:', action)
  next(action)
  console.log('Redux post-reducer state:', store.getState())
}

const store = applyMiddleware(logger)(createStore)(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
