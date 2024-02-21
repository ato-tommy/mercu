import { createSlice } from '@reduxjs/toolkit'
import { getProductsData } from './productsExtraReducers'



const productsSlice = createSlice({
  name: 'products',
  initialState:{
   productsDataLoading:false,
   productsData:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, (state) => {

        state.productsDataLoading = true
      })
      .addCase(
         getProductsData.fulfilled,(state, {payload}) => {
        
          state.productsDataLoading = false
          state.productsData = payload
        },
      )
      .addCase(getProductsData.rejected, (state) => {
        state.productsDataLoading = false
      })
  },
})

export default productsSlice.reducer