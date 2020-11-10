import React from 'react'
import {Container} from 'react-bootstrap'


class productShow extends React.Component {

state={
    clicked: false,
    cartAdd:false
}
clickHandler = () =>{
  
    this.setState((current) => ({clicked: !current.clicked}))
  }

localClickHandler=()=>{

this.props.clickHandler(this.props.product.id, this.props.userId)
    this.setState ({ cartAdd: true})

}

render(){
    console.log(this.props.product.image2)
    return(
        <Container className="w-50 card-show">
           { this.state.cartAdd?<h3 className="text-success">Successfully added to cart</h3>:null}
    <h2> {this.props.product.name}</h2>
    <div onClick={this.clickHandler} >
        <img src={this.state.clicked ? this.props.product.image2: this.props.product.image } alt= '' className="w-75"/>
    </div>
    <h3>{this.props.product.player}</h3>
    <h3>${this.props.product.price}</h3>
    <p>{this.props.product.description}</p>
    <button type="button" className="btn-dark"onClick={this.localClickHandler}>Add to cart!</button>
    </Container>
    )
}

}

export default productShow 