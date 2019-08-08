import React, { Component } from "react";
import { connect } from "react-redux";
import { testLang } from "../app/testAction";
import isEmpty from "../app/isEmpty";

import { Container, Label } from "native-base";

class ReduxSample extends Component {
  componentDidMount() {
    this.props.testLang();
  }
  render() {
    const { test } = this.props;
    if (isEmpty(test.localTest)) {
      return <Label>Loading</Label>;
    }
    return (
      <Container>
        <Label>{test.localTest.msg}</Label>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { test: state.test };
};

export default connect(
  mapStateToProps,
  { testLang }
)(ReduxSample);
