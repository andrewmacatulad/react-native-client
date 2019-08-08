import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import {
  Drawer,
  Left,
  Button,
  Container,
  Header,
  Body,
  Content,
  Icon,
  Right
} from "native-base";

import { NativeRouter, Route, Link, Switch } from "react-router-native";
import { Provider } from "react-redux";

import Home from "./src/component/Home";
import About from "./src/component/About";
import Topics from "./src/component/nativeBase";
import Login from "./src/component/Login";
import FormFormik from "./src/component/formikForm/FormFormik";

import { configureStore } from "./src/app/store/configureStore";
import ReduxSample from "./src/component/ReduxSample";
import SignIn from "./src/component/signin/SignIn";
import ProtectedPage from "./src/component/ProtectedAuth/ProtectedPage";
import { getUser } from "./src/component/signin/signInAction";
import Navbar from "./src/component/common/navbar/Navbar";
import SocialSignIn from "./src/component/signin/SocialSignIn";
import DrawerExample from "./src/component/layout/DrawerSample";
import SideBar from "./src/component/layout/Sidebar";

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Text>home!</Text>,
    main: () => <Text>Home</Text>
  },
  {
    path: "/login",
    sidebar: () => <Text>login!</Text>,
    main: () => <Text>Login</Text>
  },
  {
    path: "/protected",
    sidebar: () => <Text>protected!</Text>,
    main: () => <Text>Protected</Text>
  }
];

class App extends Component {
  async componentDidMount() {
    // if (AsyncStorage.getItem("jwt") !== undefined) {
    //   // console.log("Test");
    //   store.dispatch(getUser(AsyncStorage.getItem("jwt")));
    // }
    const test = await AsyncStorage.getItem("jwt");
    store.dispatch(getUser(test));
  }
  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          {/* <Link to="/form" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Form</Text>
            </Link> */}
          {/* <DrawerExample /> */}

          <Drawer
            ref={ref => {
              this.drawer = ref;
            }}
            content={<SideBar closeDrawer={() => this.closeDrawer()} />}
            onClose={() => this.closeDrawer()}
          >
            <Header>
              <Left>
                <Button transparent onPress={() => this.openDrawer()}>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body />

              <Right />
            </Header>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/topics" component={Topics} />
            <Route path="/login" component={SignIn} />
            <Route path="/form" component={FormFormik} />
            <Route path="/redux" component={ReduxSample} />
            <Route path="/protected" component={ProtectedPage} />
            <Route path="/social" component={SocialSignIn} />
            <Route path="/drawer" component={DrawerExample} />
            {/* {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))} */}
          </Drawer>
        </NativeRouter>
      </Provider>
    );
  }
}

// export default connect(
//   null,
//   { getUser }
// )(App);

export default App;
