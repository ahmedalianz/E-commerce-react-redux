import React from 'react'
import Loader from "react-loader-spinner";
import ProductItem from './common/productItem'
import { useSelector } from 'react-redux';
export default function PhonesList() {
    const { products } = useSelector(state => state.products)
    return products.phones ? (
        <div>
            <div className='products-list container pt-5'>
                {products.phones.map(product =>
                    <ProductItem
                        product={product}
                        productName='phones'
                        key={product.id} />
                )}
            </div>
        </div>)
        :
        (<div className="globalcenter">
            <Loader type="TailSpin" color="#00BFFF" height={350} width={350} />
        </div>
        )
}