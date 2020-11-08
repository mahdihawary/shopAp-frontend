import React, { Component } from 'react';
import './App.css';
import ProductContainer from './container/productContainer'
import ProductShow from './component/productShow'
import { Route, Switch } from 'react-router-dom'
import Navigation from './component/navigation'
import CartContainer from './container/cartContainer'
import Orders from './container/orderContainer'
import Home from './component/home'
import Login from './component/login'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{

  state={
    products:[],
    showProduct:null,
    showClick:false,
    filterTerm:'',
    cart:[],
    cartIds:[],
    user:false
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
  loginHandler=(user)=>{
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
        }
      })
    })
      .then(res => res.json())
      .then(response => {this.setState({ user:response})})
    
      
    
  }


  componentDidMount(){
    fetch('http://localhost:3000/api/v1/products')
    .then(res => res.json())
    .then(data => {
      this.setState({products: data.data})
    })
    if (this.state.user)
    {fetch('http://localhost:3000/api/v1/users/1')
      .then(res => res.json())
      .then(user => {
        this.setState({ cart: user.data.attributes.products, cartIds:user.data.attributes.cart_item })
      })}
      
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
    console.log(this.state.user)

    return (
      
      <div className="App">
        {this.state.user?
        <div>
        <Navigation />
        <Switch>
          <Route path="/login" render={()=><Login loginHandler={this.loginHandler}/>}/>
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
          <Route path="/" render={() => <Home/>} />
      </Switch>
          </div>
      : <Login loginHandler={this.loginHandler}/>  
    }
      </div>
    );

  }

}

export default App;
