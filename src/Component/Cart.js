import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/action';

const Cart = () => {
    const { cart } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();
    const { totalPrice,
        totalShipping,
        subTotal,
        vat,
        totalVat,
        finalTotal } = useSelector(state => state.cartReducer);

    useEffect(() => {
        dispatch()
    }, [])
    console.log(cart);
    return (
        <div className='col-4'>
            <div className='cart-container sticky-top ms-auto'>
                <h4>Cart</h4>
                <p>Items Ordered: {cart.length}</p>
                <hr />
                <p>Price: </p>
                <hr />
                <p>Shipping: </p>
                <hr />
                <p>Subtotal: </p>
                <hr />
                <p>Vat: </p>
                <hr />
                <p>Total: </p>
                <hr />
                <button className='btn btn-warning fw-bold'>Check Out</button>
            </div>
        </div>
    );
};

export default Cart;