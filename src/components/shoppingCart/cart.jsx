import "./cart.css";

import { useDispatch, useSelector } from "react-redux";

import ProductInCart from "./productincart.jsx";
import React from "react";
import { clearCart } from "../../redux/cart";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return cart.length > 0 ? (
    <div className={` cart-block`}>
      <div className="clear">
        <button
          className="btn btn-danger ms-5"
          onClick={() => dispatch(clearCart())}
        >
          تفريغ العربة
        </button>
      </div>
      <h1 className="globalcenter">عربة التسوق</h1>
      <div className="table-responsive">
        <table className={`table table-hover`}>
          <thead>
            <tr>
              <th scope="col">المنتج</th>
              <th scope="col">الاسم</th>
              <th scope="col">السعر</th>
              <th className="cart-control-head" scope="col">
                الكميه
              </th>
              <th scope="col">سعر المنتج الكلي</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <ProductInCart product={product} key={product.id} />
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="table-footer"
        style={{
          color: "white",
          backgroundColor: "teal",
          padding: "15px",
          fontSize: "20px",
        }}
      >
        <div>
          <div className="total-price">
            السعر الكلي :{" "}
            {parseInt(
              cart
                .map((product) => product.count * product.price)
                .reduce((p, n) => p + n)
            )}{" "}
            جنيه
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="cart-empty">
        <img src="images/cartempty.png" className="container-fluid" />
        <br />
      </div>
    </div>
  );
}
