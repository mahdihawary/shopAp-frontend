import React from 'react'
import {Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'



const productCard = ({product, clickHandler}) =>{
    
   function localClickhandler(){
       clickHandler(product.id)
       
   }
return(





<>
<Card style={{ width: '18rem' }} >
    <div className="view zoom overlay">
    <a href="#!">
        <div class="mask">
            <Card.Img variant="top" src={product.image} className="img-fluid w-100" />
            <div class="mask rgba-black-slight"></div>
        </div>
    </a>
        
    </div>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
            <h6 class="mb-2"><span>${product.price}</span></h6>

            <Button type="button" className="btn btn-dark btn-sm mr-1 mb-2"><NavLink to={`/products/${product.id}`} exact className="link"><i className="fas fa-info-circle pr-2 "></i>Details</NavLink></Button>
  </Card.Body>
</Card>
</>
    
    )
}

export default productCard