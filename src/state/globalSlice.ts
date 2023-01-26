import { AppNavigatorLinkProps } from "@/components/app/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
import { AuthenticationStatus, ScreenSize, NavigatorLink, CreaborateContext } from "./types"

interface ContextSliceState {
  screenSize: ScreenSize
  authStatus: AuthenticationStatus
  isNavigatorCollapsed: boolean
  navigatorSections: NavigatorLink[]
  isFormEditing: boolean
  formModel: any
  context: CreaborateContext
}

const initialState: ContextSliceState = {
  screenSize: ScreenSize.PHONE,
  authStatus: AuthenticationStatus.UNAUTHENTICATED,
  isNavigatorCollapsed: false,
  navigatorSections: [],
  isFormEditing: false,
  formModel: {},
  context: CreaborateContext.USER
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
    setNavigatorSections(state, action: PayloadAction<AppNavigatorLinkProps[]>) {
      const { payload } = action
      if (!_.isEqual(payload, state.navigatorSections)) {
        state.navigatorSections = payload
      }
    },
    toggleIsFormEditing(state) {
      state.isFormEditing = !state.isFormEditing
    },
    setIsFormEditing(state, action: PayloadAction<boolean>) {
      const { payload } = action
      if (payload !== state.isFormEditing) {
        state.isFormEditing = payload
      }
      if (payload) state.formModel = {}
    },
    updateFormModel(state, action: PayloadAction<{ name: string, value: any }>) {
      const { name, value } = action.payload
      const existingValue = state.formModel[name]
      if (!_.isEqual(value, existingValue)) {
        state.formModel[name] = value
      }
    },
    setContext(state, action: PayloadAction<CreaborateContext>) {
      const { payload } = action
      if (payload !== state.context) {
        state.context = payload
      }
    }
  }
})

export const {
  setScreenSize,
  setAuthStatus,
  setIsNavigatorCollapsed,
  toggleIsNavigatorCollapsed,
  setNavigatorSections,
  toggleIsFormEditing,
  setIsFormEditing,
  updateFormModel,
  setContext,
} = globalSlice.actions

export default globalSlice.reducer