import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Loader from "react-loader-spinner";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart';
export default function ProductDetails() {
    const { products } = useSelector(state => state.products)
    const { cart } = useSelector(state => state.cart)
    const { id, name } = useParams()
    const product = products[`${name}`].find(p => p.id === parseInt(id))
    const dispatch = useDispatch()
    return products ? (<div>
        <div >
            <div className='details-block'>
                <div className='details-image-container'>
                    <img src={product.image} alt={product.tiltle} />
                </div>
                <div className='details-text pt-5'>
                    <h2>{product.title}</h2>
                    <hr />
                    <h5>Only for :{product.price} $</h5>
                    <span>All prices include VAT.</span>
                    <hr />
                    <h3 style={{ color: 'red' }}><strong>Some Info About The Product :</strong></h3>
                    <p style={{ width: '80%' }}>{product.description}</p>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <button className='btn btn-primary m-2' onClick={() => dispatch(addToCart({ product, cart }))}>
                <i className='fas fa-cart-plus'>
                    <span className='ps-2'>
                        {product.inCart ? "Remove From Cart" : "Add To Cart"}
                    </span>
                </i>
            </button>
            <Link to='/cart'>
                <button className='btn btn-primary m-2'>
                    <i className="fas fa-arrow-circle-right">
                        <span className='ps-2'>Go to Cart</span>
                    </i>
                </button>
            </Link>
        </div>
    </div >
    ) : (<div>
        <Loader type="Puff" color="#00BFFF" height={30} width={30} />
    </div>
    )
}
