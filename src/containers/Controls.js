import { connect } from 'react-redux'
import Controls from '../components/Controls'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clickA: () => dispatch({type: 'A'}),
    clickB: () => dispatch({type: 'B'})
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Controls)
