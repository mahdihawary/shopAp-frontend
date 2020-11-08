import React from 'react'
import { NavLink } from 'react-router-dom'
import { Carousel, Container } from 'react-bootstrap'




const home = () => {

    return (
        <Container className="w-75 ">
            <Carousel className="bg-dark">
                <Carousel.Item className="bg-dark">
                <img
                        className="d-block w-100 "
                    src="https://images-na.ssl-images-amazon.com/images/I/61cVMSzSiLL._AC_UX679_.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="bg-dark">
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/I/61cVMSzSiLL._AC_UX679_.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/I/61cVMSzSiLL._AC_UX679_.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    )
}

export default home