import React from 'react'
import {Card} from 'react-bootstrap'
import { Button } from 'react-bootstrap'



const productCard = ({product, clickHandler}) =>{
    console.log(product)
   function localClickhandler(){
       clickHandler(product.id)
       console.log("we are here ahahahahahahah")
   }
return(






<Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>

    <Button variant="dark"><a href={`http://localhost:3001/products/${product.id}`} className="link">view</a></Button>
  </Card.Body>
</Card>
    
    )
}

export default productCard