import React     from 'react'
import PropTypes from 'prop-types'

class Context extends React.Component {
    getChildContext() {
        const {store} = this.props
        const actions = {}

        // helper: in={key:val} out=[[key,val]]
        const entries = (obj) => Object.keys(obj).map(key => [key, obj[key]])

        entries(this.props.actions).map(([key, action]) => {
            actions[key] = (...args) => store.dispatch(action(...args))
        })

        return {
            store,
            actions
        }
    }

    componentWillMount() {
        let {store} = this.props
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const {App, store} = this.props
        const state = store.getState()
        return <App state={state} />
    }
}

Context.propTypes = {
    store:   PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    App:     PropTypes.oneOfType([
             PropTypes.func,
             PropTypes.instanceOf(React.Component)
             ]).isRequired
}

Context.childContextTypes = {
    store:   PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default Context
