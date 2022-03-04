import { initialCartState, initialDataState } from "../initialState";

export const dataReducer = (state = initialDataState, action) => {
    if (action.type === 'FETCH_API_DATA') {
        return {
            ...state,
            products: action.payload
        }
    }
    else if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: [...state.cart, action.payload]
        }
    }
    else {
        return initialDataState;
    }
}

export const cartReducer = (state = initialCartState, { type, payload }) => {
    if (type === 'ADD_PRICE') {
        return {
            ...state,
            totalPrice: payload
        }
    }
    else if (type === 'ADD_SHIPPING') {
        return {
            ...state,
            totalShipping: payload
        }
    }
    else {
        return initialCartState;
    }
}

