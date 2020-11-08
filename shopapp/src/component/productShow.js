import React from 'react'


const productShow = ({product, clickHandler, userId}) =>{

function localClickHandler(){
clickHandler(product.id, userId)
}
return(
    <div >
<h2> {product.name}</h2>
<div>
    <img src={product.image} alt= ''/>
</div>
<h3>${product.price}</h3>
<p>{product.description}</p>
<button onClick={localClickHandler}>Add to cart!</button>
</div>
)
}

export default productShow 