import React from 'react'
import ProductCard from '../component/productCard'


const productContainer = ({products, clickHandler}) =>{

    function renderProduct(){ return products.map(product => <ProductCard key={product.id} product={product} clickHandler={clickHandler}/>)}


    return(
        <div>
            <h1>hi</h1>
            {renderProduct()}
        </div>
  
)



}

export default productContainer