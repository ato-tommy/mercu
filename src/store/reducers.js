import { combineReducers } from "@reduxjs/toolkit"
import productSlice from "./slices/product/productSlice"

const reducers = combineReducers({
  products:productSlice
})
     
     export default reducers