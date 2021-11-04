import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url=process.env.REACT_APP_URL
export const  getProducts=createAsyncThunk(
    'products/getProducts',
    async ()=> {
        let res=await axios(`${url}products`)
        return res.data
    }
)
const productsSlice=createSlice({
    name:'products',
    initialState:{
        products:null,
        status:null
    },
    reducers:{
    },
    extraReducers:{
        [getProducts.pending]:(state)=> {
            state.status='loading'
        },
        [getProducts.fulfilled]:(state,action)=> {
            state.status='success'
            state.products=action.payload
        },
        [getProducts.rejected]:(state)=> {
            state.status='failed'
        }
    }
})
export default productsSlice.reducer
export const {}=productsSlice.actions