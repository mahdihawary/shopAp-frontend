import React, { Component } from 'react';
import './App.css';
import ProductContainer from './container/productContainer'
import ProductShow from './component/productShow'



class App extends React.Component{

  state={
    products:[],
    showProduct:null,
    showClick:false
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/products')
    .then(res => res.json())
    .then(data => {
      this.setState({products: data.data})
    })
  }
  renderProducts=()=>{
    return this.state.products
  }

  productCardClickHandler = (obj) =>{
   let product =  this.state.products.filter(prod => prod.id === obj)
   this.setState((prevState)=>({showClick: true}))
   this.setState({showProduct: product[0]})
  }

  cardShowClickHandler= (id)=>{
    
    fetch('http://localhost:3000/api/v1/cart_items', {
      method: "POST",
      headers: {
          "content-type": "application/json",
          accepts: "application/json"
      },
      body: JSON.stringify({user_id:1, product_id: id, product_count: 1})
  })
      .then(resp => resp.json())
      .then(console.log)
      .catch(console.log)
 }
  
  render(){
    
    return (
      <div className="App">
        <ProductContainer products={this.renderProducts()} clickHandler={this.productCardClickHandler}/>
        {this.state.showClick? <ProductShow product = {this.state.showProduct} clickHandler={this.cardShowClickHandler} />:null}
      </div>
    );

  }

}

export default App;
