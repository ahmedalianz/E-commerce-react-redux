import React from 'react'
import Loader from "react-loader-spinner";
import ProductItem from './common/productItem'
import { useSelector } from 'react-redux';
export default function SaleList() {
    const { products } = useSelector(state => state.products)
    return products.sale ? (
        <div>
            <div className='phones-list container pt-5'>
                {products.sale.map(product =>
                    <ProductItem
                        product={product}
                        productName='sale'
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