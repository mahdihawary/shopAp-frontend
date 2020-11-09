import React from 'react'
import {Container} from 'react-bootstrap'


const productShow = ({product, clickHandler, userId}) =>{

function localClickHandler(){
clickHandler(product.id, userId)
}


return(
    <Container className="w-75">
<h2> {product.name}</h2>
<div>
    <img src={product.image} alt= '' className="w-75"/>
</div>
<h3>${product.price}</h3>
<p>{product.description}</p>
<button type="button" className="btn-primary"onClick={localClickHandler}>Add to cart!</button>
</Container>
)
}

export default productShow 