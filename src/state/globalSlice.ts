import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
import { AuthenticationStatus, ScreenSize, NavigatorLink } from "./types"

interface ContextSliceState {
  screenSize: ScreenSize
  authStatus: AuthenticationStatus
  isNavigatorCollapsed: boolean
  navigatorSections: NavigatorLink[]
}

const initialState: ContextSliceState = {
  screenSize: ScreenSize.PHONE,
  authStatus: AuthenticationStatus.UNAUTHENTICATED,
  isNavigatorCollapsed: false,
  navigatorSections: [],
}

const globalSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
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
  setScreenSize,
  setAuthStatus,
  setIsNavigatorCollapsed,
  toggleIsNavigatorCollapsed,
  setNavigatorSections,
} = globalSlice.actions

export default globalSlice.reducer