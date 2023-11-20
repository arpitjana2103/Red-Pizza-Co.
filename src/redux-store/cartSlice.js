import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [
        // {
        //     pizzaId: 12,
        //     name: 'Mediterranean',
        //     quantity: 2,
        //     unitPrice: 16,
        //     totalPrice: 32,
        // },
    ],
};

const cartSlice = createSlice({
    initialState: initialState,
    name: 'cart',
    reducers: {
        addItem: {
            reducer: function (state, action) {
                // Payload = new Item
                state.cart.push(action.payload);
            },
        },
        deleteItem: {
            reducer: function (state, action) {
                // Payload = pizzaId
                state.cart = state.cart.filter(function (item) {
                    return item.pizzaId !== action.payload;
                });
            },
        },
        increaseItemQuantity: {
            reducer: function (state, action) {
                // Payload = pizzaId
                const item = state.cart.find(function (item) {
                    return item.pizzaId === action.payload;
                });
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
            },
        },
        decreaseItemQty: {
            reducer: function (state, action) {
                // Payload = pizzaId
                const item = state.cart.find(function (item) {
                    return item.pizzaId === action.payload;
                });
                item.quantity--;
                if (item.quantity === 0) {
                    state.cart.filter(function (pizza) {
                        return pizza.pizzaId !== item.pizzaId;
                    });
                    return;
                }
                item.totalPrice = item.quantity * item.unitPrice;
            },
        },
        clearCart: {
            reducer: function (state) {
                state.cart = [];
            },
        },
    },
});

export default cartSlice.reducer;

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQty,
    clearCart,
} = cartSlice.actions;

export const getTotalCartQuantity = function (state) {
    return state.cart.cart.reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);
};
