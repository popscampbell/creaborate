import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import _ from "lodash"
import { ContextArea } from "./types"

interface ContextSliceState {
  area: ContextArea
}

const initialState: ContextSliceState = {
  area: "Home"
}

const globalSlice = createSlice({
  name: "context",
  initialState,
  reducers: {
    setContextArea(state, action: PayloadAction<ContextArea>) {
      const { payload } = action
      if (!_.isEqual(payload, state.area)) {
        state.area = payload
      }
    },
  }
})

export const {
  setContextArea,
} = globalSlice.actions

export default globalSlice.reducer