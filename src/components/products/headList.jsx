import React from 'react'
import Loader from "react-loader-spinner";
import ProductItem from './common/productItem'
import { useSelector } from 'react-redux';
export default function HeadList() {
    const { products } = useSelector(state => state.products)
    return products.headphones ? (
        <div>
            <div className='products-list container pt-5'>
                {products.headphones.map(product =>
                    <ProductItem
                        product={product}
                        productName='headphones'
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