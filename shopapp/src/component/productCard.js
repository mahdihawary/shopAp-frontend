import React from 'react'



const productCard = ({product, clickHandler}) =>{
   function localClickhandler(){
       clickHandler(product.id)
   }
return(
<div onClick={localClickhandler}>
<h2> {product.name}</h2>
<div>
    <img src={product.image} alt= 'hi'/>
        <a href={`http://localhost:3001/products/${product.id}`}>show this</a>
</div>
<h3>${product.price}</h3>


</div>
    )
}

export default productCard