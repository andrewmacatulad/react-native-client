import * as yup from "yup";
import { Formik } from "formik";

import { Input, Label, Item, Button, Container, Text } from "native-base";
import React, { Component, Fragment } from "react";
import { Alert } from "react-native";

export default class App extends Component {
  render() {
    return (
      <Button>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => Alert.alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup
              .string()
              .min(6)
              .required()
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit
          }) => (
            <Fragment>
              <Input
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                placeholder="E-mail"
              />
              {touched.email && errors.email && (
                <Label style={{ fontSize: 10, color: "red" }}>
                  {errors.email}
                </Label>
              )}
              <Input
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="Password"
                onBlur={() => setFieldTouched("password")}
                secureTextEntry={true}
              />
              {touched.password && errors.password && (
                <Label style={{ fontSize: 10, color: "red" }}>
                  {errors.password}
                </Label>
              )}
              <Button
                title="Sign In"
                disabled={!isValid}
                onPress={handleSubmit}
              >
                <Text>Submit</Text>
              </Button>
            </Fragment>
          )}
        </Formik>
      </Button>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         onSubmit={values => Alert.alert(JSON.stringify(values))}
//         validationSchema={yup.object().shape({
//           email: yup
//             .string()
//             .email()
//             .required(),
//           password: yup
//             .string()
//             .min(6)
//             .required()
//         })}
//       >
//         {({
//           values,
//           handleChange,
//           errors,
//           setFieldTouched,
//           touched,
//           isValid,
//           handleSubmit
//         }) => (
//           <Fragment>
//             <TextInput
//               value={values.email}
//               onChangeText={handleChange("email")}
//               onBlur={() => setFieldTouched("email")}
//               placeholder="E-mail"
//             />
//             {touched.email && errors.email && (
//               <Text style={{ fontSize: 10, color: "red" }}>{errors.email}</Text>
//             )}
//             <TextInput
//               value={values.password}
//               onChangeText={handleChange("password")}
//               placeholder="Password"
//               onBlur={() => setFieldTouched("password")}
//               secureTextEntry={true}
//             />
//             {touched.password && errors.password && (
//               <Text style={{ fontSize: 10, color: "red" }}>
//                 {errors.password}
//               </Text>
//             )}
//             <Button
//               title="Sign In"
//               disabled={!isValid}
//               onPress={handleSubmit}
//             />
//           </Fragment>
//         )}
//       </Formik>
//     );
//   }
// }
