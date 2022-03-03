import { initialState } from "../initialState";

export const dataReducer = (state = initialState, action) => {
    console.log('action', action);
    if (action.type === 'FETCH_API_DATA') {
        return {
            ...state,
            products: action.payload
        }
    } else {
        return initialState;
    }
}

