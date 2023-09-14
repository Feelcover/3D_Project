import { createSlice } from "@reduxjs/toolkit";
import { ICarouselInitialState } from "./carousel.interface";
import { items } from "./items.data";

const initialState:ICarouselInitialState = {
    currentId: 1,
    items

}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        
    }
})