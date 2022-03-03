import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApiData } from '../redux/actions/fetchAction';

const Shop = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchApiData)
    }, [])

    return (
        <div>
            Store
        </div>
    );
};

export default Shop;