import { apiConnect } from "../../api/apiConnect";
import { LOGIN } from "api/config";

export const login = (userData) => async (dispatch) => {
  try {
    const response = await apiConnect().post(LOGIN, {
      email: userData.username,
      password: userData.password,
    });

    dispatch({ type: "LOGIN_SUCCESS", payload: response.data.body.token });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", payload: error });
  }
};
export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");

    dispatch({ type: "LOGOUT" });
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
