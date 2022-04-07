import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="">
        <img src={img}></img>
      </div>
      <div className="product-name">
        <h4>{name}</h4>
        <p>
          <small>by : {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left - order soon</small>
        </p>
        <button className="main-button" 
        onClick={()=>props.handleAddProduct(props.product) }>
          Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
