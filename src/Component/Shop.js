import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPrice, addToCart, fetchApiData, stockHandler } from '../redux/actions/action';
import './Global.css'
const Shop = () => {
    const { products } = useSelector(state => state.dataReducer);
    const [index, setIndex] = useState(0);
    const [startFrom, setStartFrom] = useState(index);
    const [endOn, setEndOn] = useState(10);
    const numberOfPages = Math.ceil(products.length / 10);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiData())
    }, [])

    const handleCart = (product) => {
        dispatch(addToCart(product));
        dispatch(stockHandler(product.key));
    };

    const handlePageChange = (pageNum) => {

        const calcStart = pageNum * 10;
        const calcEnd = calcStart + 10
        setStartFrom(calcStart);
        setEndOn(calcEnd);
        setIndex(pageNum);
    }
    console.log(index, startFrom, endOn);
    return (
        <div className='col-8 shop-container'>
            <h2>Redux Shop</h2>
            <div>
                {
                    products.slice(startFrom, endOn).map((product, index) => (
                        <div className='product-card' key={product.key}>
                            <img src={product.img} alt="" />
                            <div className='product-details'>
                                <h4>{index}</h4>
                                <h6>{product.name}</h6>
                                <p>Category: {product.category}</p>
                                <p>Price: ${product.price}</p>
                                <p>Shipping: ${product.shipping}</p>
                                {
                                    !product.stock ?
                                        <h4 className='text-danger'>Out of Stock</h4>
                                        :
                                        <small className='text-danger'>In Stock: {product.stock}</small>
                                }
                                <button disabled={!product.stock} onClick={() => handleCart(product)} className='btn btn-warning fw-bold d-block'>Add To Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='d-flex justify-content-around w-50'>
                {
                    [...Array(numberOfPages)].map((element, index) => (

                        <button onClick={() => handlePageChange(index)} className='pagination-tab btn btn-primary' key={index}>{index + 1}</button>

                    ))
                }

            </div>

        </div>
    );
};

export default Shop;