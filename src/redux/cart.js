import {createSlice} from '@reduxjs/toolkit'
import produce from "immer"
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart=[...action.payload.cart,action.payload.product]
        },
        increaseProduct:(state,action)=>{
            const index=action.payload.cart.indexOf(action.payload.product)
            const newCart=produce(action.payload.cart,draft=>{
                draft[index].count++
            })
            state.cart=newCart
        },
        decreaseProduct:(state,action)=>{
            const index=action.payload.cart.indexOf(action.payload.product)
            const newCart=produce(action.payload.cart,draft=>{
                draft[index].count--
            })
            state.cart=newCart
        },
        removeProduct:(state,action)=>{
            const newCart=action.payload.cart.filter(p=>p.id!==action.payload.product.id)
            state.cart=newCart
        },
        clearCart:(state,action)=>{
            state.cart=[]
        }
    }
})
export default cartSlice.reducer
export const {addToCart,clearCart,increaseProduct,decreaseProduct,removeProduct}=cartSlice.actions