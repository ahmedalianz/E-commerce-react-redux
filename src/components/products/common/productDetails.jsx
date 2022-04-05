import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "react-loader-spinner";
import React from "react";
import { addToCart } from "../../../redux/cart";

export default function ProductDetails() {
  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const { id, name } = useParams();
  const product = products[`${name}`].find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  return products ? (
    <div className="details-cont">
      <div>
        <div className="details-block">
          <div className="details-image-container">
            <img src={product.image} alt={product.tiltle} />
          </div>
          <div className="details-text pt-5">
            <h2>{product.title}</h2>
            <hr />
            <h5>فقط : {product.price.toFixed(2)} جنيه</h5>
            <span>الأسعار تشمل ضريبة القيمة المضافة.</span>
            <hr />
            <h3 style={{ color: "red" }}>
              <strong>حول هذه السلعه :</strong>
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: product.description }}
              style={{ width: "80%", lineHeight: "2rem" }}
            ></p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-primary m-2"
          onClick={() => dispatch(addToCart({ product, cart }))}
        >
          <span className="ps-2">
            {product.inCart ? "أسترجع من عربه التسوق" : "أضف لعربه التسوق"}
          </span>
          <i className="fas fa-cart-plus"></i>
        </button>
        <Link to="/cart">
          <button className="btn btn-primary m-2">
            <span className="ps-2">عربة التسوق</span>
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <Loader type="Puff" color="#00BFFF" height={30} width={30} />
    </div>
  );
}
