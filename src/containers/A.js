import { connect } from 'react-redux'
import A from '../components/A'

const mapStateToProps = state => {
  return {
    val: state.A
  }
}

export default connect(
  mapStateToProps,
  undefined
)(A)
