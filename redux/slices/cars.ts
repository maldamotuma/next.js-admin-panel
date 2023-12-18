import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Car } from "@/types"

const initialState: {
    compare: Car[]
} = {
    compare: []
}

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCarCompare: (state, { payload }: PayloadAction<Car>) => {
            if (state.compare.length <= 4) {
                return { ...state, compare: [...state.compare, payload] }
            }
            return state;
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCarCompare } = carsSlice.actions

export default carsSlice.reducer