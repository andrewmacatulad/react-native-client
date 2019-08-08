import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Text } from "native-base";

import { getProtectPage } from "./protectedAction";
import { getUser } from "../signin/signInAction";

class ProtectedPage extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getProtectPage();
  }

  render() {
    const { page, user } = this.props;

    console.log(user);
    return (
      <Container>
        {user.isAuthenticated ? (
          <Text>{page.page}</Text>
        ) : (
          <Text>Not Logged In</Text>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user, page: state.page };
};

export default connect(
  mapStateToProps,
  { getProtectPage, getUser }
)(ProtectedPage);
