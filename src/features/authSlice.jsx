import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,

};
const authSlice = createSlice({
    name:"auth",
    // initialState: initialState, yerine ESX ile gelen yeni yazımda key ile value aynı isimli ise sadece biri de yazılabilir..
    initialState,
    reducers:{
        setUser : (state,action) => {
            state.user = action.payload;
            
        },
        clearUser : (state) => {
            state.user = null,

        }
    }
});

export const {setUser,clearUser} = authSlice.actions;
export default authSlice.reducer;