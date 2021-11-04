import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseProduct, decreaseProduct, removeProduct } from '../../redux/cart'
import { toast } from 'react-toastify'
export default function ProductInCart({ product }) {
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleDecrease = () => {
    if (product.count > 0) {
      dispatch(decreaseProduct({ product, cart }))
    }
    else {
      toast.error('Cannot decrease than 0')
    }
  }

  return (<>
    <tr>
      <th scope="row">
        <div className="cart-product-image">
          <img src={product.image} alt={product.id} />
        </div>
      </th>
      <td>{product.title}
        <div className='cart-controls-2'>
          <div >
            <i className="fas fa-plus-square" onClick={() => dispatch(increaseProduct({ product, cart }))}></i>
            <span className='p-2'>{product.count}</span>
            <i className="fas fa-minus-square" onClick={handleDecrease}></i>
          </div>
        </div >
        <div className='cart-controls-2'>
          <i onClick={() => dispatch(removeProduct({ product, cart }))}
            className='fas fa-trash-alt trash'></i></div>

      </td>
      <td>{(product.price).toFixed(2)} $

      </td>
      <td className='cart-controls'>
        <div >
          <button className="btn btn-primary" onClick={() => dispatch(increaseProduct({ product, cart }))}>+</button>
          <span className='p-2'>{product.count}</span>
          <button className="btn btn-warning" onClick={handleDecrease}>-</button>
        </div>
      </td >
      <td className='cart-controls'><i
        className='fas fa-trash-alt trash' onClick={() => dispatch(removeProduct({ product, cart }))}></i></td>
      <td className='cart-Tprice'>{parseInt(product.count * product.price).toFixed(2)} $
      </td>
    </tr>
  </>
  )
}

