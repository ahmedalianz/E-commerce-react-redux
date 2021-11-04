import React from 'react'
import Loader from "react-loader-spinner";
import ProductItem from './common/productItem'
import { useSelector } from 'react-redux';
export default function AccessoriesList() {
    const { products } = useSelector(state => state.products)
    return products.accessories ? (
        <div>
            <div className='products-list container pt-5'>
                {products.accessories.map(product =>
                    <ProductItem
                        product={product}
                        productName='accessories'
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