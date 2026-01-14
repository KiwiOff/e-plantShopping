import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      //Aqui establezco que voy a pedir el NAME
      state.items = state.items.filter(item =>
        item.name !== action.payload
      );
    },

    //Al usar el arrow fuction con llave, debe retornar algo 
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find( (item) =>{
      if (item.name === name) {
        return true
      }
      else
        return false
      })
      
      if (item) {
        item.quantity += amount
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
