import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getCategoriesData  = createAsyncThunk('category/getCategoriesData ', async () => {
   const response = await axios.get('http://192.168.50.127/Category/GetAll').then(res=>{
      if(res.status == 200){
         return res
      }
   })
   return response.data;
 });