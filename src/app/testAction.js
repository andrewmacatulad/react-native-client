import axios from "axios";
import {
  asyncActionStart,
  asyncActionError
} from "./features/async/asyncActions";

export const TESTING_LANG = "TESTING_LANG";
export const SEQUELIZE_LANG = "SEQUELIZE_LANG";
export const testLang = () => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const test = await axios.get(
      "https://mighty-bayou-22851.herokuapp.com/test"
    );

    dispatch({
      type: TESTING_LANG,
      payload: test.data
    });
  } catch (error) {
    dispatch(asyncActionError());
    console.log(error);
  }
};

export const sequelizeTest = () => async dispatch => {
  dispatch(asyncActionStart());

  try {
    const test = await axios.get(
      "https://mighty-bayou-22851.herokuapp.com/tests"
    );

    dispatch({
      type: SEQUELIZE_LANG,
      payload: test.data
    });
  } catch (error) {
    dispatch(asyncActionError());
    console.log(error);
  }
};
