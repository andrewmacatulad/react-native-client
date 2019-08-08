import axios from "axios";
// import Cookies from "js-cookie";
import { AsyncStorage, Alert } from "react-native";

import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../app/features/async/asyncActions";

export const PROTECTED_PAGE = "PROTECTED_PAGE";

export const getProtectPage = () => async dispatch => {
  dispatch(asyncActionStart());
  const test = await AsyncStorage.getItem("jwt");
  try {
    const res = await axios.get(
      "https://mighty-bayou-22851.herokuapp.com/protected_page",
      {
        headers: { authorization: test },
        withCredentials: true
      }
    );
    console.log("Error ", res.data);

    dispatch({
      type: PROTECTED_PAGE,
      payload: res.data
    });
    dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionError());

    console.log(error);
  }
};
