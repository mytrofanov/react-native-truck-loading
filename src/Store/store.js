import { configureStore } from '@reduxjs/toolkit';
import truckReducer from '../../redux/truckSlice'

export default configureStore({
    reducer: {
        truckStore: truckReducer
    },
});
