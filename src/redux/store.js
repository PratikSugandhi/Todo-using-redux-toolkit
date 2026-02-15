import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slices/todoSlice';
// configureStore creates global data store and also the states inside the global data store.
const store = configureStore({
    // Below basically creates state todos is the key name of the state in the global store.
//     {
//    todos: // whatever todoReducer manages
//     }
    reducer: {
        todos: todoReducer
    },
    devTools: true
});

export default store;