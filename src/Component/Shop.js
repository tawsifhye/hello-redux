import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchApiData } from '../redux/actions/fetchAction';

const Shop = () => {
    const products = useSelector(state => state.dataReducer.products);
    console.log(products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchApiData())
    }, [])

    return (
        <div>
            Store
        </div>
    );
};

export default Shop;