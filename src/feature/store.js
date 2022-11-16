import { configureStore } from "@reduxjs/toolkit";
import formValidationSlice from './formSlice'



export const store = configureStore(
    {
        reducer:{
            formValidationReducer:formValidationSlice
        }
    }
);