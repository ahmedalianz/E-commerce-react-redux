import React from 'react'
import './cart.css'
import ProductInCart from './productincart.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/cart'
// import PayPal from './paypal';
export default function Cart({ history }) {
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    return cart.length > 0 ? (
        <div className={` cart-block`}>
            <div className='clear'>
                <button className='btn btn-danger ms-5' onClick={() => dispatch(clearCart())}>
                    Clear Cart
                </button>
            </div>
            <h1 className="globalcenter">Shopping Cart</h1>
            <table className={`table table-hover`}>
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Product Price</th>
                        <th className="cart-control-head" scope="col">Quantity</th>
                        <th className="cart-control-head" scope="col">Remove</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product =>
                        <ProductInCart
                            product={product}
                            key={product.id}
                        />
                    )}
                </tbody>
            </table>
            <div className="table-footer">
                <div>
                    <div className='total-price'>
                        Total Price :{" "}{parseInt((cart.map((product) =>
                            product.count * product.price
                        )).reduce((p, n) => p + n))}{" "} $
                    </div>
                </div>
            </div>
            {/* <div className='d-flex flex-row-reverse m-5'>
                <PayPal
                    total={totalPrice}
                    history={history}
                    clearCart={clearCart}
                />
            </div> */}
        </div>
    )
        : (<div>
            <div className="cart-empty">
                <img src='images/cartempty.png' className='container-fluid' />
                <br />
            </div>
        </div>
        )
}
