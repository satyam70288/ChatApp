import {configureStore} from '@reduxjs/toolkit';
import authSlice from './reducers/auth.slice';

const store = configureStore({
    reducer: { 
        [authSlice.name]: authSlice.reducer
       } 
}); 


export default  store;