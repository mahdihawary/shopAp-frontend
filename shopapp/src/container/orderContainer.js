import React from 'react'
import ProductCard from '../component/productCard'



class orders extends React.Component{
    
    state={
        past_orders:[]
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/users/1`)
        .then(resp =>resp.json())
        .then(resp=>this.setState({past_orders:resp.data.attributes.past_products}))
    }

    renderProducts=()=>{
        return this.state.past_orders.map(product => <ProductCard key={product.id} product={product} clickHandler={this.props.clickHandler} />)
    }
    
    render(){
        return (
            <div>
                {this.renderProducts()}
            </div>

        )
    }
 
}

export default orders