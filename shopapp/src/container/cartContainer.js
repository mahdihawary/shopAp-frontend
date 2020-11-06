import React from 'react'
import ProductCard from '../component/productCard'

class Cart extends React.Component{
    renderCartItems=()=>{
       return this.props.cart.map(product => <ProductCard key={product.id} product={product} clickHandler="something" />)
    }

    localPurchase=()=>{
        this.props.makePurchase(this.props.cart, this.props.cartIds)
    }

    render(){
        return(
            <div>
                {this.renderCartItems()}
                <button onClick={this.localPurchase}>checkout</button>
                
            </div>
        )
    }

}

export default Cart