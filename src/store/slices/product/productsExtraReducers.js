import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getProductsData  = createAsyncThunk('product/getproductsData ', async (data) => {

   const response = await axios.post('http://192.168.50.127/Product/GetAll',data).then(res=>{
      if(res.status == 200){
         return res
      }
   })
   return response.data;
 });

 export const getProductById  = createAsyncThunk('product/getProductById ', async (data) => {

   const response = await axios.post('http://192.168.50.127/Product/GetById',data).then(res=>{
      if(res.status == 200){
         return res
      }
   })
   return response.data;
 });