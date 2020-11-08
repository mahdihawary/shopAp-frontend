import React from 'react'
import ProductCard from '../component/productCard'
import {CardColumns} from 'react-bootstrap'



class orders extends React.Component{
    
    state={
        past_orders:[]
    }

    componentDidMount(){
    //   fetch('http://localhost:3000/api/v1/profile', {
    //   method: 'GET',
    //   headers: {
    //  Authorization: `Bearer ${this.props.user.jwt}`
    //   }
    // })
    //     .then(resp =>resp.json())
    //     .then(resp=>this.setState({past_orders:resp.user.data.attributes.past_products}))
    // 
    }

    renderProducts=()=>{
        return this.props.user.user.data.attributes.past_products.map(product => <ProductCard key={product.id} product={product} clickHandler={this.props.clickHandler} />)
    }
    
    render(){
        console.log(this.props.user)
        return (
            <CardColumns>
                {this.renderProducts()}
            </CardColumns>

        )
    }
 
}

export default orders