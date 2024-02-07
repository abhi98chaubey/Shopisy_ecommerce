import { configureStore } from "@reduxjs/toolkit";
import { cartReducer }  from './Slices/reducers';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
