import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/action';

const Cart = () => {
    const cartItems = useSelector(state => state.dataReducer.cart);

    // console.log(cartItems);
    return (
        <div className='col-4'>
            <div className='cart-container sticky-top ms-auto'>
                <h4>Cart</h4>
                <p>Items Ordered: </p>
                <hr />
                <p>Price: </p>
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