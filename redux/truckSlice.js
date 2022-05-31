import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const truckSlice = createSlice({
    name: "truckLoading",
    initialState: {
        truckNumber: null,
        trip: [{excavator:89, loadWeight:130, time: 20-40}],
        averageWeight: 130
    },
    setTrip: (state, action) => {
        return {...state.trip, trip:action.trip}
    },
})

export const { setTrip } = truckSlice.actions
export default truckSlice.reducer
