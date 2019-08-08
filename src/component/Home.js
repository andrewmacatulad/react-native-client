import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Tab,
  Tabs,
  Text
} from "native-base";

class Home extends Component {
  render() {
    return (
      <Content>
        <Tabs>
          <Tab heading="Tab1">
            <Text>Tab 1</Text>
          </Tab>
          <Tab heading="Tab2">
            <Text>Tab 2</Text>
          </Tab>
          <Tab heading="Tab3">
            <Text>Tab 3</Text>
          </Tab>
        </Tabs>
      </Content>
    );
  }
}

export default Home;
