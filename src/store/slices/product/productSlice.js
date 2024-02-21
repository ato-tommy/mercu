import { createSlice } from '@reduxjs/toolkit'
import { getProductById, getProductsData } from './productsExtraReducers'



const productsSlice = createSlice({
  name: 'products',
  initialState:{
   productsDataLoading:false,
   productsData:[],
   productDataLoading:false,
   productData:[]

  },
  reducers: {
    showModal: (state) => {
      state.productDataLoading = false
    },
    hideModal: (state) => {
      state.productDataLoading = true
    },
  },
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
      .addCase(getProductById.pending, (state) => {

        state.productDataLoading = true
      })
      .addCase(
         getProductById.fulfilled,(state, {payload}) => {
        console.log(payload)
          state.productDataLoading = false
          state.productData = payload
        },
      )
      .addCase(getProductById.rejected, (state) => {
        state.productDataLoading = false
      })
  },
})
export const { hideModal } = productsSlice.actions;
export default productsSlice.reducer  