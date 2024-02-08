import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { cartReducer } from "./Slices/cartSlice";

// Configure persistence options
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persisted store
const persistor = persistStore(store);

export { store, persistor };




// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./Slices/cartSlice";

// const store = configureStore({
//   reducer: cartReducer
// });

// export default store;