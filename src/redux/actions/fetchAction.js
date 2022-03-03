

export const loadData = (payload) => {
    return {
        type: 'LOAD_SHOP_DATA',
        payload
    }

}


export const fetchApiData = async () => {
    const response = await fetch('https://tawsifhye.github.io/data/shop.json')
        .then(res => res.json())
    console.log(response);

    return {
        type: 'FETCH_API_DATA',
        payload: response
    }
}