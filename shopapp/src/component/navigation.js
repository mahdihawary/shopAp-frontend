import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'



const navigation = ({logOut}) => {
    
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/products" exact className="nav-link">Browse</NavLink>
                    {/* <NavLink to="/login" exact className="nav-link" >Login</NavLink> */}
                    <NavLink to="/orders" exact className="nav-link">Past Orders</NavLink>
                    <NavLink to="/checkout" exact className="nav-link">Checkout</NavLink>
                    <p className="nav-link logout-link"  onClick={logOut}>Log Out</p>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navigation