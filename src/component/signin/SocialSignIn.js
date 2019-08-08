import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Button
} from "native-base";
import { Linking } from "react-native";

class SocialSignIn extends Component {
  componentDidMount() {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          console.log("Initial url is: " + url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  }
  render() {
    return (
      <Card>
        <CardItem>
          <Icon name="logo-googleplus" style={{ fontSize: 20, color: "red" }} />
          <Button
            onPress={() =>
              Linking.openURL(
                "http://mighty-bayou-22851.herokuapp.com/auth/google"
              )
            }
          >
            <Text>Google Plus</Text>
          </Button>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default SocialSignIn;
