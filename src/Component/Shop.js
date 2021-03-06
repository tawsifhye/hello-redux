import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, fetchApiData, stockHandler } from '../redux/actions/action';
import './Global.css'


const Shop = () => {


    const { products } = useSelector(state => state.dataReducer);
    const [index, setIndex] = useState(0);
    const productPerPage = 10;
    const [startFrom, setStartFrom] = useState(index);
    const [endOn, setEndOn] = useState(productPerPage);
    const numberOfPages = Math.ceil(products.length / productPerPage);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiData())
    }, [])

    const handleCart = (product) => {
        dispatch(addToCart(product));
        dispatch(stockHandler(product.key));
    };

    const handlePageChange = (pageNum) => {
        const calcStart = pageNum * productPerPage;
        const calcEnd = calcStart + productPerPage
        setStartFrom(calcStart);
        setEndOn(calcEnd);
        setIndex(pageNum);
    }

    const goNext = () => {
        const calcStart = (index + 1) * productPerPage;
        const calcEnd = calcStart + productPerPage
        setStartFrom(calcStart);
        setEndOn(calcEnd);
        setIndex(index + 1);
    }
    const goPrev = () => {
        const calcStart = (index - 1) * productPerPage;
        const calcEnd = calcStart + productPerPage
        setStartFrom(calcStart);
        setEndOn(calcEnd);
        setIndex(index - 1);
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

            <div className='d-flex justify-content-around w-lg-50'>
                <button onClick={goPrev} className="btn btn-primary" disabled={index === 0}>{'<<'} Prev</button>
                {

                    [...Array(numberOfPages)].map((element, index) => (

                        <button onClick={() => handlePageChange(index)} className='pagination-tab btn btn-primary' key={index}>{index + 1}</button>

                    ))
                }
                <button onClick={goNext} className="btn btn-primary" disabled={index === numberOfPages - 1}>Next {'>>'}</button>
            </div>
            <h4 className='mt-5'>Page:{index + 1}/{numberOfPages}</h4>
        </div>
    );
};

export default Shop;