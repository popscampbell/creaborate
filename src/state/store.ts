import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "./globalSlice"
import teamReducer from "./teamSlice"
import userReducer from "./userSlice"

const store = {
  ...configureStore({
    reducer: {
      app: globalReducer,
      user: userReducer,
      team: teamReducer,
    },
    middleware: function (getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false
      })
    },
  }),
}

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch