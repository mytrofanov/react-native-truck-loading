import { createSlice } from "@reduxjs/toolkit"

const truckSlice = createSlice({
    name: "truckLoading",
    initialState: {
        truckNumber: null,
        trip: [],
        averageWeight: 0
    },
    reducers: {
        setTrip: (state, action) => {
            const newTrip = action.payload
            state.trip = state.trip.concat(newTrip)
        },
        setAverageWeight: (state, action) => {
            state.averageWeight = action.payload
        },
    },

})

export const { setTrip, setAverageWeight } = truckSlice.actions
export default truckSlice.reducer
