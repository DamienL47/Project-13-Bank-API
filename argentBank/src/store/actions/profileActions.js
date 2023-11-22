import { apiConnect } from "api/apiConnect";
import { PROFILE } from "api/config";

export const postProfile = (userData) => async (dispatch) => {
  try {
    const response = await apiConnect().post(PROFILE, {
      Authorization: userData.token,
    });
    dispatch({ type: "PROFILE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "PROFILE_FAIL", payload: error.response.data });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

export const updateProfile = (userData) => async (dispatch) => {
  try {
    const response = await apiConnect().put(PROFILE, {
      Authorization: userData.token,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });

    dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "UPDATE_PROFILE_FAIL", payload: error.response.data });
  }
};
