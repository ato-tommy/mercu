import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getProductsData  = createAsyncThunk('category/getproductsData ', async (data) => {

   const response = await axios.post('http://192.168.50.127/Product/GetAll',data).then(res=>{
      if(res.status == 200){
         return res
      }
   })
   return response.data;
 });