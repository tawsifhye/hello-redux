

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