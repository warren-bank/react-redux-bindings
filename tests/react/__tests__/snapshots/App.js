import App from 'App'

const {initialState} = redux
const {expectJSX}    = enzyme

describe('[snapshot] React stateless presentation component: App', function() {

  it('should render static JSX for the initial Redux state', function() {
    let component = <App state={initialState} />

    expectJSX(component).toMatchSnapshot()
  })

})
