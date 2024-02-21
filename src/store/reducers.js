import { combineReducers } from "@reduxjs/toolkit"
import productSlice from "./slices/product/productSlice"
import CategorySlice from "./slices/Category/CategorySlice"

const reducers = combineReducers({
  products:productSlice,
  category:CategorySlice
})
     
     export default reducers