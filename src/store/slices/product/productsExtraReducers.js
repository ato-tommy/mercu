import { createAsyncThunk } from "@reduxjs/toolkit"

// export const getCompaniesData = ('companies/getCompaniesData', async (_, { rejectWithValue }) => {
//   try {
//     const response = await AppApi.get(CompanyUrl.GetCompaniesInvoiceCount)
//       .then((res) => {
//         if (res.status === 200) {
//           return res.data
//         }
//       })
// //       .catch((error: Error) => {
// //         // showResponseError(error)
// //         return rejectWithValue(error)
// //       })
//     return response
//   } catch (error) {
//     return rejectWithValue(error)
//   }
// })



// export const switchShops = createAsyncThunk(
//        'customer-club/SwitchShops',
//        async ({ data }, { dispatch, rejectWithValue }) => {
//          try {
//            const response = await AppApi.post(CustomerUrl.SwitchShops, data)
//              .then((res) => {
//                if (res.status === 200) {
//                  if (res.data?.successOperation) {
//                    localStorage.setItem('user', JSON.stringify(res.data))
//                    dispatch(clearCustomerTagCode())
//                    dispatch(clearPointsData())
//                    dispatch(clearInvoicesData())
//                    dispatch(clearGiftsData())
//                    dispatch(clearMyRedeems())
     
//                    dispatch(getCustomerByTagCode())
//                  }
//                  return res.data
//                }
//              })
//        //       .catch((error: Error) => {
//        //         // showResponseError(error)
//        //         return rejectWithValue(error)
//        //       })
//            return response
//          } catch (error) {
//            return rejectWithValue(error)
//          }
//        },
//      )