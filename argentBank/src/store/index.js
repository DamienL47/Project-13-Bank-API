import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import editProfileReducer from "./reducers/editProfileReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    editProfile: editProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
