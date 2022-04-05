import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

const ProductItem = ({ product, productName }) => {
  return (
    <>
      <div className=" m-1">
        <div className="card-image-container m-auto">
          <Link to={`/details/${productName}/${product.id}`}>
            <img src={product.image} className="card-img-top p-2" alt="..." />
          </Link>
        </div>
        <div className="card-body mt-2">
          <p className="card-title text-center text-muted">{product.title}</p>
          <p className="card-text text-center">
            {product.price.toFixed(2)} جنيه
          </p>
        </div>
      </div>
    </>
  );
};
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
export default ProductItem;
