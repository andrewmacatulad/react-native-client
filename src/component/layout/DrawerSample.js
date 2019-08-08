// import React, { Component } from "react";
// import { Drawer, Text, Button } from "native-base";
// import SideBar from "./Sidebar";

// export default class DrawerExample extends Component {
//   closeDrawer() {
//     this.drawer._root.close();
//   }
//   openDrawer() {
//     this.drawer._root.open();
//   }
//   render() {
//     return (
//       <Drawer
//         ref={ref => {
//           this.drawer = ref;
//         }}
//         content={<SideBar navigator={this.navigator} />}
//         onClose={() => this.closeDrawer.bind(this)}
//       >
//         <Button onClick={() => this.openDrawer.bind(this)}>
//           <Text>Main View</Text>
//         </Button>
//       </Drawer>
//     );
//   }
// }

// import React, { Component } from "react";
// import {
//   Drawer,
//   Left,
//   Button,
//   Container,
//   Header,
//   Body,
//   Content,
//   Icon,
//   Right
// } from "native-base";
// import SideBar from "./Sidebar";

// export default class DrawerExample extends Component {
//   closeDrawer() {
//     this.drawer._root.close();
//   }

//   openDrawer() {
//     this.drawer._root.open();
//   }

//   renderContainer() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent onPress={() => this.openDrawer()}>
//               <Icon name="menu" />
//             </Button>
//           </Left>
//           <Body />

//           <Right />
//         </Header>
//         <Content padder>{this.props.children}</Content>
//       </Container>
//     );
//   }

//   render() {
//     return (
//       <Drawer
//         ref={ref => {
//           this.drawer = ref;
//         }}
//         content={<SideBar navigator={this.navigator} />}
//         onClose={() => this.closeDrawer()}
//       >
//         {this.renderContainer()}
//       </Drawer>
//     );
//   }
// }

import React, { Component } from "react";
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
import SideBar from "./Sidebar";

export default class DrawerExample extends Component {
  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }

  renderContainer() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body />

        <Right />
      </Header>
    );
  }

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
      >
        {this.renderContainer()}
      </Drawer>
    );
  }
}
