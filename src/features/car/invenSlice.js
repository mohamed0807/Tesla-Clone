import { createSlice } from "@reduxjs/toolkit";

const initialState={
    inven:["keys","tyres","hood","mirror"]
}

const inventorySlice=createSlice({
    name:"inv",
    initialState,
    reducers:{}
})

export const inventory=(state)=>state.inv.inven

export default inventorySlice.reducer