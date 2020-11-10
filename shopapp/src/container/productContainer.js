import React from 'react'
import ProductCard from '../component/productCard'
import ProductShow from '../component/productShow'
import { Route, Switch } from 'react-router-dom'
import SearchBar from '../component/searchBar'
import{CardColumns} from 'react-bootstrap'
import productShow from '../component/productShow'


const productContainer = ({products, clickHandler, filterTerm, filterChange, filterHandler}) =>{


    function renderProduct(){ return products.map(product => <ProductCard key={product.id} product={product.attributes} clickHandler={clickHandler}/>)}
  

    return(
       
        <div>
            <h3>Jerseys ({products.length})</h3>
            <SearchBar filterHandle={filterHandler} filterTerm={filterTerm} filterChange={filterChange}/>
            <CardColumns>
                {renderProduct()}
            </CardColumns>
            
            
        </div>
  
)



}

export default productContainer