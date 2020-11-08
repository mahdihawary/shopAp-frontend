import React from 'react'
import {Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'



const productCard = ({product, clickHandler}) =>{
    
   function localClickhandler(){
       clickHandler(product.id)
       
   }
return(






<Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>

            <Button variant="dark"><NavLink to={`/products/${product.id}`} exact className="nav-link">View</NavLink></Button>
  </Card.Body>
</Card>
    
    )
}

export default productCard