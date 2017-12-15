import { connect } from 'react-redux'
import B from '../components/B'

const mapStateToProps = state => {
  return {
    val: state.B
  }
}

export default connect(
  mapStateToProps,
  undefined
)(B)
