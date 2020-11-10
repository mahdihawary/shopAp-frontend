import React from 'react'
import ProductCard from '../component/productCard'
import {CardColumns, Container} from 'react-bootstrap'



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
        return this.props.orders.map(product => <ProductCard key={product.id} product={product} clickHandler={this.props.clickHandler} />)
    }
    
    render(){
        console.log(this.props.orders)
        return (<div>
            {this.props.orders.length===0? <h3>You haven't purchased anything yet...</h3>: <h3>Previous orders</h3>}
            <CardColumns>
                {this.renderProducts()}
            </CardColumns>
            <Container>
                
            </Container>
            </div>

        )
    }
 
}

export default orders