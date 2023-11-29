const initialState = {
  data: null,
  error: null,
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE_SUCCESS":
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case "UPDATE_PROFILE_FAIL":
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default editProfileReducer;
