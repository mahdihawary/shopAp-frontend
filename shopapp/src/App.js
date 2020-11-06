import React, { Component } from 'react';
import './App.css';
import ProductContainer from './container/productContainer'
import ProductShow from './component/productShow'
import { Route, Switch } from 'react-router-dom'
import NavBar from './component/navBar'
import CartContainer from './container/cartContainer'
import Orders from './container/orderContainer'



class App extends React.Component{

  state={
    products:[],
    showProduct:null,
    showClick:false,
    filterTerm:'',
    cart:[],
    cartIds:[]
  }
  filterChange=(e)=>{
    this.setState({ filterTerm : e.target.value})
  }

  filterProduct=()=>{
    return this.state.products.filter(product => product.attributes.name.toLowerCase().includes(this.state.filterTerm.toLowerCase()))
  }

  makePurchase=(cart, cartIds)=>{
    cart.forEach(item=>{
      this.createOrderItem(item)
    })
    cartIds.forEach(item=>{
      this.emptyCart(item)
    })
    this.setState({cart: [],cartIds: []})
  }

  createOrderItem=(item)=>{
    fetch('http://localhost:3000/api/v1/orders', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user_id: 1, product_id: item.id })
    })
    .then(res => res.json())
    .then(console.log)
  }

  emptyCart=(item)=>{
    fetch(`http://localhost:3000/api/v1/cart_items/${item.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(console.log)

  }



  componentDidMount(){
    fetch('http://localhost:3000/api/v1/products')
    .then(res => res.json())
    .then(data => {
      this.setState({products: data.data})
    })
    fetch('http://localhost:3000/api/v1/users/1')
      .then(res => res.json())
      .then(user => {
        this.setState({ cart: user.data.attributes.products, cartIds:user.data.attributes.cart_item })
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
      body: JSON.stringify({user_id: 1, product_id: id, product_count: 1})
  })
      .then(resp => resp.json())
      .then(cart=>{
        console.log(cart, "cart item")
        let newAr=[...this.state.cart, cart.data.attributes.product]
        this.setState({cart:newAr})
      })
      .catch(console.log)
 }
  
  render(){
    console.log()
    console.log(this.state.cart, "our cart", this.state.cartIds)
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/login" render={()=><h1>login</h1>}/>
          <Route path="/checkout" render={() => <CartContainer cart={this.state.cart} makePurchase={this.makePurchase} cartIds={this.state.cartIds}/>} />
          <Route path="/orders" render={() => <Orders clickHandler={this.productCardClickHandler}/>} />
          <Route path="/signup" render={() => <h1>login</h1>} />
          <Route path="/products/:id" render={(routerProps) => {
            let id = routerProps.match.params.id

            let product
            if (this.state.products.length > 0) {
              product = this.state.products.find(el => el.id === id)
              
            }
            
            return (
              <>
                  {
                    this.state.products.length > 0 ? <ProductShow product={product.attributes} clickHandler={this.cardShowClickHandler} />
                      :
                      <h1>Loading</h1>
                  }
              </>
            )
          }} />
          <Route path="/products" exact render={() => <ProductContainer products={this.filterProduct()} clickHandler={this.productCardClickHandler} filterTerm={this.state.filterTerm} filterChange={this.filterChange}/>} />
          <Route path="/" render={() => <h1>Welcome</h1>} />
      </Switch>
      </div>
    );

  }

}

export default App;
