import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import logo from '../logo/logo.ico'
import CartModal from './cartModal'



const navigation = ({logOut, cart, removeCartItem, makePurchase, cartIds, userName}) => {
    
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand href=""><img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>

                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                    <NavLink to="/products" exact className="nav-link">Browse</NavLink>
                    {/* <NavLink to="/login" exact className="nav-link" >Login</NavLink> */}
                    <NavLink to="/orders" exact className="nav-link">Past Orders</NavLink>
                    <NavLink to="/checkout" exact className="nav-link">Checkout</NavLink>
                    
                </Nav>
                
            <p className="username">Welcome, {userName.charAt(0).toUpperCase() + userName.slice(1)} </p>
                    <CartModal removeCartItem={removeCartItem} cart={cart} makePurchase={makePurchase} cartIds={cartIds}/>
                    <p className="nav-link logout-link"  onClick={logOut}>Log Out</p>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navigation