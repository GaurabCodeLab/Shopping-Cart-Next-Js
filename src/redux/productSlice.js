import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getAllProducts = createAsyncThunk("getAllProducts", async ()=>{
    try {
        const response = await fetch("/api");
        if(!response.ok){
            throw new Error("Something went wrong");
        };
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error in fetching all products", error);
    }
});

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
        cart: [],
        loading: false,
        error: null
    },
    
    reducers: {
        addToCart: (state, action)=>{
            if(state.cart.length){
                const duplicateIndex = state.cart.findIndex((value)=>{
                    return value._id === action.payload._id
                });
              if(duplicateIndex !== -1){
                state.cart[duplicateIndex].quantity += 1;
              } else{
                state.cart.push(action.payload);
              }
            } else{
                state.cart.push(action.payload);
            }
        },
        deleteProduct: (state, action)=>{
            state.cart = state.cart.filter((value)=>{
                    return value._id !== action.payload
            })
        },
        incrementQuantity: (state, action)=>{
            const productIndex = state.cart.findIndex((value)=>{
                return value._id === action.payload
            });
            state.cart[productIndex].quantity += 1;
        },
        decrementQuantity: (state, action)=>{
            const productIndex = state.cart.findIndex((value)=>{
                return value._id === action.payload;
            });
            if(state.cart[productIndex].quantity === 1){
                state.cart.splice(productIndex, 1);
            } else{
                state.cart[productIndex].quantity -= 1;
            }
        }
    },

    extraReducers: (builder)=>{
        builder.addCase(getAllProducts.pending, (state, action)=>{
            state.loading = true;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getAllProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export { getAllProducts };
export const { addToCart, deleteProduct, incrementQuantity, decrementQuantity } = productSlice.actions;
export default productSlice.reducer;