import React        from 'react'
import ReactDOM     from 'react-dom'
import Context      from './react/components/container/class/Context'
import App          from './react/components/presentation/stateless-functions/App'
import store        from './redux/store'
import actions      from './redux/actions'

window.React = React

{
  let props = {
    store,
    actions,
    App
  }

  ReactDOM.render(
    <Context {...props}  />,
    document.getElementById("root")
  )
}
