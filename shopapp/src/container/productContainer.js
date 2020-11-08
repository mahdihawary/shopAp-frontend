import React from 'react'
import ProductCard from '../component/productCard'
import ProductShow from '../component/productShow'
import { Route, Switch } from 'react-router-dom'
import SearchBar from '../component/searchBar'
import{CardColumns} from 'react-bootstrap'


const productContainer = ({products, clickHandler, filterTerm, filterChange}) =>{


    function renderProduct(){ return products.map(product => <ProductCard key={product.id} product={product.attributes} clickHandler={clickHandler}/>)}
    

    return(
        <div>
            <SearchBar filterTerm={filterTerm} filterChange={filterChange}/>
            <CardColumns>
                {renderProduct()}
            </CardColumns>
            
            
        </div>
  
)



}

export default productContainer