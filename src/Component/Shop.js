import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, fetchApiData } from '../redux/actions/action';
import './Global.css'
const Shop = () => {
    const { products, cart } = useSelector(state => state.dataReducer);
    console.log(cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApiData())
    }, [])

    return (
        <div className='col-8 shop-container'>
            <h2>Redux Shop</h2>
            <div>
                {
                    products.map(product => (
                        <div className='product-card' key={product.key}>
                            <img src={product.img} alt="" />
                            <div className='product-details'>
                                <h6>{product.name}</h6>
                                <p>Category: {product.category}</p>
                                <p>Price: ${product.price}</p>
                                <p>Shipping: ${product.shipping}</p>
                                <small className='text-danger'>In Stock: {product.stock}</small>
                                <button onClick={() => dispatch(addToCart(product))} className='btn btn-warning fw-bold d-block'>Add To Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Shop;