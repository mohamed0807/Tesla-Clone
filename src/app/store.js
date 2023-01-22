import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice'
import inventoryReducer from '../features/car/invenSlice'
export const store = configureStore({
  reducer: {
    car: carReducer,
    inv:inventoryReducer
  },
});
