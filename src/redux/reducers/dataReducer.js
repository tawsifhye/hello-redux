import { initialState } from "../initialState";

export const dataReducer = (state = initialState, action) => {
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
        return initialState;
    }
}


