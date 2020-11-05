import React from 'react'



const productCard = ({product, clickHandler}) =>{
   function localClickhandler(){
       clickHandler(product.id)
   }
return(
<div onClick={localClickhandler}>
<h2> {product.attributes.name}</h2>
<div>
    <img src={product.attributes.image} alt= 'hi'/>
</div>
<h3>${product.attributes.price}</h3>

</div>
    )
}

export default productCard