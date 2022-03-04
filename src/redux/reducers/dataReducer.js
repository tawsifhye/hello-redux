import { initialDataState } from "../initialState";

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

    else if (action.type === 'STOCK_MAINTAIN') {
        return {
            ...state,
            products: state.products.map(product => {
                if (product.key === action.payload) {
                    product.stock -= 1;
                }
                return product;
            })
        }
    }
    else if (action.type === 'ADD_PRICE') {
        return {
            ...state,
            totalPrice: action.payload
        }
    }
    else if (action.type === 'ADD_SHIPPING') {
        return {
            ...state,
            totalShipping: action.payload
        }
    }

    else {
        return initialDataState;
    }
}




/* const cartReducer = (state = initialCartState, action) => {
    if (action.type === 'ADD_PRICE') {
        return {
            ...state,
            totalPrice: action.payload
        }
    }
    else if (action.type === 'ADD_SHIPPING') {
        return {
            ...state,
            totalShipping: action.payload
        }
    }
    else {
        return initialCartState;
    }
}

export default cartReducer; */



