import React from 'react'
import {Container} from 'react-bootstrap'


class productShow extends React.Component {

state={
    clicked: false
}
clickHandler = () =>{
  
    this.setState((current) => ({clicked: !current.clicked}))
  }

localClickHandler=()=>{
this.props.clickHandler(this.props.product.id, this.props.userId)
}

render(){
    console.log(this.props.product.image2)
    return(
        <Container className="w-75">
    <h2> {this.props.product.name}</h2>
    <div onClick={this.clickHandler}>
        <img src={this.state.clicked ? this.props.product.image2: this.props.product.image } alt= '' className="w-75"/>
    </div>
    <h3>${this.props.product.price}</h3>
    <p>{this.props.product.description}</p>
    <button type="button" className="btn-primary"onClick={this.localClickHandler}>Add to cart!</button>
    </Container>
    )
}

}

export default productShow 