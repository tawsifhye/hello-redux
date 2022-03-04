import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPrice, addShipping, calculateSubTotal, calculateTotal, vatCalculation } from '../redux/actions/action';

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
    // let catCal = 0;

    useEffect(() => {
        cart.forEach(item => {
            onlyPrice += item.price;
            onlyShipping += item.shipping;
        })
        const calcVat = vat * onlyPrice
        const calcSub = onlyPrice + onlyShipping;
        const calFinalTotal = calcSub + calcVat
        dispatch(addPrice(onlyPrice));
        dispatch(addShipping(onlyShipping));
        dispatch(vatCalculation(calcVat));
        dispatch(calculateSubTotal(calcSub));
        dispatch(calculateTotal(calFinalTotal))
    }, [onlyPrice, cart])

    // console.log(totalShipping);
    // console.log('useref', onlyShipping.current);
    return (
        <div className='col-4'>
            <div className='cart-container sticky-top ms-auto'>
                <h4>Cart</h4>
                <p>Items Ordered: {cart.length}</p>
                <hr />
                <p>Price: ${totalPrice.toFixed(2)}</p>
                <hr />
                <p>Shipping: ${totalShipping.toFixed(2)}</p>
                <hr />
                <p>Subtotal: ${subTotal.toFixed(2)}</p>
                <hr />
                <p>Vat: ${totalVat.toFixed(2)}</p>
                <hr />
                <p>Total: ${finalTotal.toFixed(2)}</p>
                <hr />
                <button className='btn btn-warning fw-bold'>Check Out</button>
            </div>
        </div>
    );
};

export default Cart;