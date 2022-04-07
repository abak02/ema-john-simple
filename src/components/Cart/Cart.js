import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    //const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
    let total =0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;
    }

    let shippingCost =0;
    if(total>35){
        shippingCost=0;
    }
    else if(total>0){
        shippingCost=12.99;
    }
    else if(total>15){
        shippingCost=4.99;
    }
    let vat = (total/10).toFixed(2);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order : {cart.length}</p>
            <p>Product Price : {total}</p>
            <p><small>Shipping cost : {shippingCost}</small></p>
            <p><small>Vat : {vat}</small></p>
            <p>Total Price : {total+shippingCost+Number(vat)}</p>
        </div>
    );
};

export default Cart;