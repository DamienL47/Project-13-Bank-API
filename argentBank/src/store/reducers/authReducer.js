const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: "Utilisateur inconnu",
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
