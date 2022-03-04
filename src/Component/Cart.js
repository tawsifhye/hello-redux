import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPrice, addShipping } from '../redux/actions/action';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart, totalPrice,
        totalShipping,
        subTotal,
        vat,
        totalVat,
        finalTotal } = useSelector(state => state.dataReducer);

    let onlyPrice = 0;
    let onlyShipping = 0;

    useEffect(() => {
        cart.forEach(item => {
            onlyPrice += item.price;
            onlyShipping += item.shipping;
        })
        dispatch(addPrice(onlyPrice));
        dispatch(addShipping(onlyShipping));
    }, [onlyPrice, cart])

    console.log(totalShipping);
    // console.log('useref', onlyShipping.current);
    return (
        <div className='col-4'>
            <div className='cart-container sticky-top ms-auto'>
                <h4>Cart</h4>
                <p>Items Ordered: {cart.length}</p>
                <hr />
                <p>Price: ${totalPrice.toFixed(2)}</p>
                <hr />
                <p>Vat: ${(vat * totalPrice).toFixed(2)}</p>
                <hr />
                <p>Shipping: ${totalShipping.toFixed(2)}</p>
                <hr />
                <p>Subtotal: ${(totalPrice + totalShipping).toFixed(2)} </p>
                <hr />
                <p>Total: $</p>
                <hr />
                <button className='btn btn-warning fw-bold'>Check Out</button>
            </div>
        </div>
    );
};

export default Cart;