import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class LaneContainer extends Component {
  render() {
    console.log(this.props);
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lane: state.lanes
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaneContainer);
