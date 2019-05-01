import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as BoardActions from "../../actions/boardActions";
import Lane from "../../components/Lane";
import AddLaneForm from "../../components/Forms/AddLaneForm";
import { LaneContainer } from "../LaneContainer";

import styles from "./style.css";

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
  handleAddCard = (values, index) => {
    const { dispatch } = this.props;
    dispatch(BoardActions.AddCard(values, index));
    // console.log(values, index);
  };
  render() {
    const { lanes } = this.props;
    return (
      <div>
        {lanes && (
          <ul className={styles.horList}>
            {lanes.map((lane, index) => (
              <li key={index}>
                <Lane
                  lane={lane}
                  handleAddCard={values => this.handleAddCard(values, index)}
                />
              </li>
            ))}
          </ul>
        )}
        <AddLaneForm onSubmit={this.handleAddLane} />
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
