import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  Input,
  Label,
  Button,
  Container,
  Text,
  Item,
  Content
} from "native-base";

import { loginUser, getUser, signupUser } from "./signInAction";

// const SignupSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Required"),
//   password: Yup.string()
//     .required("No password provided.")
//     .min(3, "Password is too short - should be 3 chars minimum.")
//     .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
//   name: Yup.string().matches(
//     /[a-zA-Z]/,
//     "Password can only contain Latin letters."
//   )
// });

class SignIn extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Invalid email")
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(3, "Password is too short - should be 3 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        })}
        onSubmit={(values, { setSubmitting }) => {
          this.props.loginUser(values);
          //  this.props.signupUser(values);
          setSubmitting(false);
          // if (onSign) {
          //   this.props.loginUser(values);
          //   setSubmitting(false);
          // } else {
          //   this.props.signupUser(values);
          //   setSubmitting(false);
          // }
        }}
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
          <Container>
            <Content>
              <Item>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  placeholder="E-mail"
                  placeholderTextColor="red"
                />
                {/* {touched.email && errors.email && (
                  <Label style={{ fontSize: 16, color: "red" }}>
                    {errors.email}
                  </Label>
                )} */}
              </Item>
              <Item>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  onBlur={() => setFieldTouched("password")}
                  secureTextEntry={true}
                  placeholderTextColor="red"
                />
                {/* {touched.password && errors.password && (
                  <Label style={{ fontSize: 16, color: "red" }}>
                    {errors.password}
                  </Label>
                )} */}
              </Item>
              <Button
                block
                title="Sign In"
                disabled={!isValid}
                onPress={handleSubmit}
              >
                <Text>Submit</Text>
              </Button>
            </Content>
          </Container>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { loginUser, getUser, signupUser }
)(SignIn);
