const initialState = {
  status: null,
  message: null,
  body: {
    email: null,
    firstName: null,
    lastName: null,
    createdAt: null,
    updatedAt: null,
    id: null,
  },
  isAuthenticated: false,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_SUCCESS":
      return {
        ...state,
        status: 200,
        message: action.payload.message,
        body: {
          email: action.payload.body.email,
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
          createdAt: action.payload.body.createdAt,
          updatedAt: action.payload.body.updatedAt,
          id: action.payload.body.id,
        },
        isAuthenticated: true,
      };
    case "PROFILE_FAIL":
      return {
        ...state,
        status: 401,
        message: action.payload.message,
        error: action.payload.message,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
