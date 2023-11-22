const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.body.id,
          email: action.payload.body.email,
        },
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
