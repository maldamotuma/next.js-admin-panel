import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { statusTypes, userType } from "@/types";


export interface auth {
  status: statusTypes;
  user: userType | null;
}

const initialState: auth = {
  status: "pending",
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialAuthUser: (state, { payload }: PayloadAction<auth>) => {
      return { ...payload };
    },
    setAuthUser: (state, { payload }: PayloadAction<auth['user']>) => {
      state.user = payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuthUser, setInitialAuthUser } = authSlice.actions

export default authSlice.reducer