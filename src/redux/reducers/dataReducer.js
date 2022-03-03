import { initialState } from "../initialState";

export const dataReducer = (state = initialState, action) => {
    if (action.type === 'FETCH_SHOP_DATA') {
        return {
            ...state,
            shopData: action.payload
        }
    } else {
        return initialState;
    }
}

