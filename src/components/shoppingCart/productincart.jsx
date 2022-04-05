import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../redux/cart";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { toast } from "react-toastify";

export default function ProductInCart({ product }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDecrease = () => {
    if (product.count > 1) {
      dispatch(decreaseProduct({ product, cart }));
    } else {
      dispatch(removeProduct({ product, cart }));
    }
  };

  return (
    <>
      <tr>
        <th scope="row">
          <div className="cart-product-image">
            <img src={product.image} alt={product.id} />
          </div>
        </th>
        <td>{product.title}</td>
        <td>{product.price.toFixed(2)} جنيه</td>
        <td className="cart-controls">
          <div>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(increaseProduct({ product, cart }))}
            >
              +
            </button>
            <span className="p-2">{product.count}</span>
            <button className="btn btn-warning" onClick={handleDecrease}>
              -
            </button>
          </div>
        </td>
        <td className="cart-Tprice">
          {parseInt(product.count * product.price).toFixed(2)} جنيه
        </td>
      </tr>
    </>
  );
}
