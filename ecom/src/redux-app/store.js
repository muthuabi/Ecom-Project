import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./features/admin/adminSlice";

export const store=configureStore({
    reducer:{
        admin:adminSlice
    }
});