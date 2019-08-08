import React, { Component } from "react";
import { Container, Header, Content, List, ListItem, Text } from "native-base";
import { Link } from "react-router-native";
export default class ListExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Link to="/" underlayColor="#f0f4f7">
                <Text>Home</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/login"
                underlayColor="#f0f4f7"
                onPress={() => this.props.closeDrawer()}
              >
                <Text>Login</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/social"
                underlayColor="#f0f4f7"
                onPress={() => this.props.closeDrawer()}
              >
                <Text>Social Login</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/protected"
                underlayColor="#f0f4f7"
                onPress={() => this.props.closeDrawer()}
              >
                <Text>Protected Page</Text>
              </Link>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
