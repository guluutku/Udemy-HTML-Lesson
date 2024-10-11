import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increaseByTwoCounter } from '../redux/actions/counterActions';

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e => { this.props.dispatch(increaseByTwoCounter()) }}>
          2 arttır
        </button>
      </div>
    )
  }
}

// Connect to redux action
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
