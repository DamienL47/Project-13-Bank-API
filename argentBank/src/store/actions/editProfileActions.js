import { apiProfile } from "../../api/apiConnect";
import { PROFILE } from "../../api/config";

export const updateProfile = (userData) => async (dispatch) => {
  try {
    const response = await apiProfile().put(
      PROFILE,
      {
        firstName: userData.formData.firstname,
        lastName: userData.formData.lastname,
      },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );

    dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "UPDATE_PROFILE_FAIL", payload: error.response });
  }
};
