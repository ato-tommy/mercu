import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './productInitialState'

import productsReducers from './productReducers'

const productsSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: productsReducers,
  extraReducers: (builder) => {
    // builder
    //   .addCase(getCompaniesData.pending, (state) => {
    //     state.products.productsDataLoading = true
    //   })
    //   .addCase(
    //     getCompaniesData.fulfilled,
    //     (state, { payload }) => {
    //       state.products.productsDataLoading = false
    //       state.products.productsData = payload
    //     },
    //   )
    //   .addCase(getCompaniesData.rejected, (state) => {
    //     state.products.productsDataLoading = false
    //   })
  },
})


export default productsSlice.reducer