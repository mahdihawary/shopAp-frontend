import React from 'react'


const productShow = ({product, clickHandler}) =>{

function localClickHandler(){
clickHandler(product.id)
}

return(
    <div >
<h2> {product.attributes.name}</h2>
<div>
    <img src={product.attributes.image} alt= 'hi'/>
</div>
<h3>${product.attributes.price}</h3>
<p>{product.attributes.description}</p>
<button onClick={localClickHandler}>Add to cart!</button>
</div>
)
}

export default productShow 