import React from 'react'
import ProductCard from '../component/productCard'
import ProductShow from '../component/productShow'
import { Route, Switch } from 'react-router-dom'
import SearchBar from '../component/searchBar'


const productContainer = ({products, clickHandler, filterTerm, filterChange}) =>{


    function renderProduct(){ return products.map(product => <ProductCard key={product.id} product={product.attributes} clickHandler={clickHandler}/>)}
    

    return(
        <div>
            <h1>hi</h1>
            <SearchBar filterTerm={filterTerm} filterChange={filterChange}/>
            {renderProduct()}
            
        </div>
  
)



}

export default productContainer