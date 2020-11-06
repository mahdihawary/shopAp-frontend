import React from 'react'
import { NavLink } from 'react-router-dom'



const navBar = () => {
    
    return (
        <div>
            <NavLink to="/" exact activeStyle={{background: 'darkblue'}}>Home</NavLink>
            <NavLink to="/products" exact activeStyle={{background: 'darkblue'}}>Browse</NavLink>
            <NavLink to="/login" exact activeStyle={{ background: 'darkblue'}} >Login</NavLink>
            <NavLink to="/orders" exact activeStyle={{ background: 'darkblue' }}>Past Orders</NavLink>
            <NavLink to="/checkout" exact activeStyle={{ background: 'darkblue' }}>Checkout</NavLink>
        </div>
    )
}

export default navBar