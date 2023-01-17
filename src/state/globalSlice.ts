import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
import { AuthenticationStatus, ContextArea, ScreenSize, NavigatorLink } from "./types"

interface ContextSliceState {
  area: ContextArea
  screenSize: ScreenSize
  authStatus: AuthenticationStatus
  isNavigatorCollapsed: boolean
  navigatorSections: NavigatorLink[]
}

const initialState: ContextSliceState = {
  area: "Home",
  screenSize: "Phone",
  authStatus: "unauthenticated",
  isNavigatorCollapsed: false,
  navigatorSections: [],
}

const globalSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    setContextArea(state, action: PayloadAction<ContextArea>) {
      const { payload } = action
      if (payload !== state.area) {
        state.area = payload
      }
    },
    setScreenSize(state, action: PayloadAction<ScreenSize>) {
      const { payload } = action
      if (payload !== state.screenSize) {
        state.screenSize = payload
      }
    },
    setAuthStatus(state, action: PayloadAction<AuthenticationStatus>) {
      const { payload } = action
      if (payload !== state.authStatus) {
        state.authStatus = payload
      }
    },
    setIsNavigatorCollapsed(state, action: PayloadAction<boolean>) {
      const { payload } = action
      if (payload !== state.isNavigatorCollapsed) {
        state.isNavigatorCollapsed = payload
      }
    },
    toggleIsNavigatorCollapsed(state) {
      state.isNavigatorCollapsed = !state.isNavigatorCollapsed
    },
    setNavigatorSections(state, action: PayloadAction<NavigatorLink[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.navigatorSections)) {
        state.navigatorSections = payload
      }
    },
  }
})

export const {
  setContextArea,
  setScreenSize,
  setAuthStatus,
  setIsNavigatorCollapsed,
  toggleIsNavigatorCollapsed,
  setNavigatorSections,
} = globalSlice.actions

export default globalSlice.reducer