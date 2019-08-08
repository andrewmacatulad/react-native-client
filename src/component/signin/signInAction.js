import axios from "axios";
import { AsyncStorage, Alert } from "react-native";

import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinish
} from "../../app/features/async/asyncActions";

export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const AUTH_ERROR = "AUTH_ERROR";
export const UNAUTH_USER = "UNAUTH_USER";

export const GET_USER = "GET_USER";

export const signupUser = values => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const res = await axios.post(
      "https://mighty-bayou-22851.herokuapp.com/register",
      {
        email: values.email,
        password: values.password,
        name: values.name
      },
      {
        withCredentials: true
      }
    );

    dispatch({
      type: SIGNUP_USER,
      payload: res.data
    });

    // history.push("/");
    dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionError());

    dispatch(authError(error.response.data));
  }
};

export const loginUser = values => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const res = await axios.post(
      "https://mighty-bayou-22851.herokuapp.com/login",
      {
        email: values.email,
        password: values.password
      },
      {
        withCredentials: true
      }
    );

    await AsyncStorage.setItem("jwt", res.data.token);

    // Cookies.set("test", res.data.token, { path: "/", expires: 365 });
    // const tokenCookie = Cookies.get("test");
    const testing = await AsyncStorage.getItem("jwt");

    dispatch(getUser(testing));
    Alert.alert(testing);
    dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionError());
    Alert.alert(error.response.data);

    dispatch(authError(error.response.data));
  }
};

export const signoutUser = history => async dispatch => {
  dispatch(asyncActionStart());
  AsyncStorage.removeItem("jwt");
  await axios.get("https://mighty-bayou-22851.herokuapp.com/logout");
  // Cookies.remove("test");
  dispatch({ type: UNAUTH_USER });
  // console.log(res.data)

  history.push("/");
  // dispatch(getUser());
  dispatch(asyncActionFinish());
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export const getUser = () => async dispatch => {
  dispatch(asyncActionStart());
  const testing = await AsyncStorage.getItem("jwt");
  // console.log(testing);
  try {
    const res = await axios.get(
      "https://mighty-bayou-22851.herokuapp.com/current_user",
      {
        headers: { authorization: testing },
        withCredentials: true
      }
    );
    console.log("action ", res.data);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
    dispatch(asyncActionFinish());
  } catch (err) {
    console.log("action ", err);
    dispatch(asyncActionError());
  }
};

// export const getUser = () => async dispatch => {
//   dispatch(asyncActionStart());
//   console.log(Cookies.get("test"));
//   try {
//     const res = await axios.get("http://192.168.1.4/current_user", {
//       headers: { authorization: Cookies.get("test") },
//       withCredentials: true
//     });
//     console.log("Get user ", res);
//     dispatch({
//       type: GET_USER,
//       payload: res.data
//     });
//     dispatch(asyncActionFinish());
//   } catch (err) {
//     dispatch(asyncActionError());
//   }
// };
