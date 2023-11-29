const initialState = {
  message: null,
  body: {
    firstName: null,
    lastName: null,
    id: null,
    email: null,
  },
  isAuthenticated: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_SUCCESS":
      return {
        ...state,
        message: action.payload.message,
        body: {
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
          id: action.payload.body.id,
          email: action.payload.body.email,
        },
        isAuthenticated: true,
      };
    case "PROFILE_FAIL":
      return {
        ...state,
        isAuthenticated: false,
      };
    case "PROFILE_TOKEN_MISSING":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
