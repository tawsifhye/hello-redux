

export const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }

}


export const fetchApiData = () => {
    return async (dispatch) => {
        const response = await fetch('https://tawsifhye.github.io/data/shop.json')
            .then(res => res.json());
        dispatch({
            type: 'FETCH_API_DATA',
            payload: response
        })
    }
}

export const addPrice = (payload) => {
    return {
        type: 'ADD_PRICE',
        payload
    }
}
export const addShipping = (payload) => {
    return {
        type: 'ADD_SHIPPING',
        payload
    }
}


export const vatCalculation = (payload) => {
    return {
        type: 'VAT_CALC',
        payload
    }
}
export const calculateSubTotal = (payload) => {
    return {
        type: 'CALC_SUBTOTAL',
        payload
    }
}
export const calculateTotal = (payload) => {
    return {
        type: 'CALC_TOTAL',
        payload
    }
}

export const stockHandler = (payload) => {
    return {
        type: 'STOCK_MAINTAIN',
        payload
    }
}



