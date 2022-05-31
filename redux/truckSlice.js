import { createSlice } from "@reduxjs/toolkit"

const truckSlice = createSlice({
    name: "truckLoading",
    initialState: {
        truckNumber: null,
        trip: [],
        averageWeight: 130
    },
    reducers: {
        setTrip: (state, action) => {
            const newTrip = action.payload
            state.trip = state.trip.concat(newTrip)
        },
    },

})

export const { setTrip } = truckSlice.actions
export default truckSlice.reducer
