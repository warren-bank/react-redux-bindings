import React     from 'react'
import PropTypes from 'prop-types'

const purify = function(stateless_func) {
    class PureComponentWrap extends React.PureComponent {
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
 *     store.dispatch(actions.INCREMENT_COUNTER())
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
