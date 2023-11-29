import { apiProfile } from "api/apiConnect";
import { PROFILE } from "api/config";

export const postProfile =
  ({ isAuthenticated, token }) =>
  async (dispatch) => {
    const { errorMessage } = "Utilisateur inconnu";
    if (!token && !isAuthenticated) {
      dispatch({ type: "PROFILE_TOKEN_MISSING" });
      return;
    }

    try {
      const response = await apiProfile(token).post(PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({ type: "PROFILE_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "PROFILE_FAIL", payload: errorMessage });
    }
  };
