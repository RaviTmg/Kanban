import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as BoardActions from "../../actions/boardActions";
import Lane from "../../components/Lane";
import AddLaneForm from "../../components/Forms/AddLaneForm";

class BoardContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // };
  handleAddLane = values => {
    console.log(this.props);
    const { dispatch } = this.props;
    console.log(dispatch);
    dispatch(BoardActions.AddLane(values.name));
  };
  render() {
    const { lanes } = this.props;
    return (
      <div>
        {!lanes ? (
          <AddLaneForm onSubmit={this.handleAddLane} />
        ) : (
          <ul>
            {lanes.map((lane, index) => (
              <li key={index}>
                <Lane lane={lane} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state.board;
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BoardActions, dispatch)
  };
}

export default connect(mapStateToProps)(BoardContainer);
