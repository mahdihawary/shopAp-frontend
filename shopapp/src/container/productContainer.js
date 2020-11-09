import React from 'react'
import ProductCard from '../component/productCard'
import SearchBar from '../component/searchBar'
import{CardColumns} from 'react-bootstrap'


const productContainer = ({products, clickHandler, filterTerm, filterChange}) =>{


    function renderProduct(){ return products.map(product => <ProductCard key={product.id} product={product.attributes} clickHandler={clickHandler}/>)}
    console.log(products)

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