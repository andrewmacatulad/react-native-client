import React, { Component } from "react";
import { Container, Header, Left, Body, Right, Title } from "native-base";

class About extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>About</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export default About;
