import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPrice, addToCart, fetchApiData, stockHandler } from '../redux/actions/action';
import './Global.css'
const Shop = () => {
    const { products } = useSelector(state => state.dataReducer);
    const [index, setrIndex] = useState(0);
    const numberOfPages = Math.round(products.length / 10);
    console.log(numberOfPages);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApiData())
    }, [])

    const handleCart = (product) => {
        dispatch(addToCart(product));
        dispatch(stockHandler(product.key));
    };
    return (
        <div className='col-8 shop-container'>
            <h2>Redux Shop</h2>
            <div>
                {
                    products.slice(index, 10).map(product => (
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

            <div className='d-flex justify-content-around w-50'>
                {
                    [...Array(numberOfPages)].map((element, index) => (

                        <div className='pagination-tab' key={index}>{index + 1}</div>

                    ))
                }

            </div>

        </div>
    );
};

export default Shop;