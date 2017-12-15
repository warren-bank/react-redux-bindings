import React     from 'react'
import PropTypes from 'prop-types'

const purify = function(stateless_func) {
    class PureComponentWrap extends React.PureComponent {

        // validate that the application includes an action creator for each "action" the stateless function needs the ability to dispatch
        componentWillMount() {
            let validate_action = action => {
                let {actions} = this.context
                if ((actions instanceof Object) && (actions[action] !== undefined)) return true
                throw new Error(`required Redux action "${action}" is not defined in the context of the presentation component tree`)
            }
            let key = 'requireActions'
            let val = stateless_func[key]
            if (val instanceof Array) {
                val.forEach(action => validate_action(action))
            }
            else if (typeof val === 'string') {
                validate_action(val)
            }
        }

        // only called by the update lifecycle when "props" have changed
        render() {
            return stateless_func(this.props, this.context)
        }
    }

    PureComponentWrap.contextTypes = {
        store:   PropTypes.object,
        actions: PropTypes.object
    };

    ["propTypes", "defaultProps"].forEach(key => {
        let val = stateless_func[key]
        if (val instanceof Object) {
            PureComponentWrap[key] = val
        }
    })

    return PureComponentWrap
}

export default purify

/* ---------------------------------------------------------
 * usage:
 * ======
 * 
 * const Component = (props, context) => {
 *     let {store, actions} = context
 * 
 *     actions.INCREMENT_COUNTER(1)
 * 
 *     store.dispatch({type: 'INCREMENT_COUNTER', count: 1})
 * 
 *     return <pre>{JSON.stringify(store.getState())}</pre>
 * }
 * 
 * Component.propTypes    = {}
 * Component.defaultProps = {}
 * 
 * const PureComponent = purify(Component)
 * 
 * --------------------------------------------------------- */
