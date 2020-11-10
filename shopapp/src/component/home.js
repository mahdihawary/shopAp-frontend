import React from 'react'
import { Carousel, Container } from 'react-bootstrap'




const home = ({product}) => {

let firstThree = product.slice(0, 3)

console.log(firstThree)
    
return (
    <div>
        <h2>Welcome to Maillot de Sport</h2>
        <Container className="w-50 ">
            <Carousel className="bg-dark">
                <Carousel.Item className="bg-dark">
                <img
                        className="d-block w-100 "
                    src={firstThree[0].attributes.image}
                    alt="First slide"
                />
                <Carousel.Caption className="bg-dark">
                    <h3>{firstThree[0].attributes.player}</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={firstThree[1].attributes.image}
                    alt="Third slide"
                />

             <Carousel.Caption className="bg-dark">
                <h3>{firstThree[1].attributes.player}</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={firstThree[2].attributes.image}
                    alt="Third slide"
                />

            <Carousel.Caption className="bg-dark">
                <h3>{firstThree[2].attributes.player}</h3>
       
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    </div>
    )
}

export default home