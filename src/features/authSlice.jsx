import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null;

};
const authSlice = createSlice({
    name:"auth",
    // initialState: initialState, yerine ESX ile gelen yeni yazımda key ile value aynı isimli ise sadece biri de yazılabilir..
    initialState,
    reducers:{
        
    }
})
