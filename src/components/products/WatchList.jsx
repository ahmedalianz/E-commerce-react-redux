import React from 'react'
import Loader from "react-loader-spinner";
import ProductItem from './common/productItem'
import { useSelector } from 'react-redux';
import './products.css'
export default function WatchList() {
    const { products } = useSelector(state => state.products)
    return products.watches ? (
        <div>
            <div className='products-list container pt-5'>
                {products.watches.map(product =>
                    <ProductItem
                        product={product}
                        productName='watches'
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