import React, { Component } from 'react';
import ProductContainer from './container/productContainer'
import ProductShow from './component/productShow'
import { Route, Switch } from 'react-router-dom'
import Navigation from './component/navigation'
import CartContainer from './container/cartContainer'
import Orders from './container/orderContainer'
import Home from './component/home'
import Login from './component/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './component/signup'
import './App.css';



class App extends React.Component{

  state={
    products:[],
    showProduct:null,
    showClick:false,
    filterTerm:'',
    cart:[],
    cartIds:[],
    user:false,
    orders:[],
    sportFilter:'',
    error:false
  }
  filterChange=(e)=>{
    this.setState({ filterTerm : e.target.value})

  }

  filterProduct=()=>{
    return this.state.products.filter(product => product.attributes.name.toLowerCase().includes(this.state.filterTerm.toLowerCase()))
    .filter(product => product.attributes.sport.toLowerCase().includes(this.state.sportFilter.toLowerCase()))
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
      body: JSON.stringify({ user_id: this.state.user.user.data.id, product_id: item.id })
    })
    .then(res => res.json())
    .then(order => {
        console.log(order, "cart item")
        let newAr = [...this.state.orders, order.data.attributes.product]
        this.setState({ orders: newAr })
      })
      .catch(console.log)
  }

  emptyCart=(item)=>{
    fetch(`http://localhost:3000/api/v1/cart_items/${item.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(console.log)

  }
  loginHandler=(user)=>{
    console.log(this.state.user)
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
      .then(response => { this.setState({ user: response, cart: response.user.data.attributes.products, cartIds: response.user.data.attributes.cart_item, orders: response.user.data.attributes.past_products})})
      .catch(resp=>this.setState({error:true}))
      console.log(this.state.user)
  }

  SignUpSubmitHandler =(obj) =>{
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({user:{ username:obj.username , password: obj.password, user_img:obj.userImg }})
    })
    .then(res => res.json())
      .then(response => { this.setState({ user: response, cart: response.user.data.attributes.products, cartIds: response.user.data.attributes.cart_item, orders: response.user.data.attributes.past_products})})
    
      console.log(this.state.user)
  }
 

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/products')
    .then(res => res.json())
    .then(data => {
      this.setState({products: data.data})
      console.log(data.d)
    })
    if(Boolean(this.state.user))
    {fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
     Authorization: `Bearer ${this.state.user.jwt}`
   }
    })
      .then(res => res.json())
      .then(user => {
        console.log(user.data.attributes.past_products)
        this.setState({ cart: user.data.attributes.products, cartIds:user.data.attributes.cart_item, orders:user.data.attributes.past_products })
      })}

      
  }
  renderProducts=()=>{
    return this.state.products
  }

  
  cardShowClickHandler= (id, userId)=>{
    console.log(this.state.user, "yesse=irrrrrr")
    fetch('http://localhost:3000/api/v1/cart_items', {
      method: "POST",
      headers: {
          "content-type": "application/json",
          accepts: "application/json"
      },
      body: JSON.stringify({user_id: userId, product_id: id, product_count: 1})
     
  })
  
      .then(resp => resp.json())
      .then(cart=>{
        console.log(cart, "cart item")
        let newAr=[...this.state.cart, cart.data.attributes.product]
        this.setState({cart:newAr})
        let Ar=[...this.state.cartIds, cart.data.attributes]
        this.setState({cartIds:Ar})
      })
      
      .catch(console.log)
      
 }
 
 logOutHandler =()=>{
   this.setState({user: false})
 }

 filterHandler= (val)=>{
   this.setState({sportFilter: val})
 }

 removeCartItem=(item)=>{
  fetch(`http://localhost:3000/api/v1/cart_items/${item}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      let newCart=[...this.state.cart]
      console.log(newCart.filter(el=>el.id === data.data.attributes.id))
      newCart=newCart.filter(el=>el.id !== data.data.attributes.product.id)
      console.log(newCart)
     
      this.setState({ cart: newCart})})

}
  
  render(){
    console.log(this.state.user)
    console.log(this.state.cart)
    

    return (
      
      <div className="App">
        
        <div>
          {this.state.user? <Navigation logOut={this.logOutHandler}/> : null }
       
       
              
            {this.state.user ? 
            <Switch>

              <Route path="/products/:id"  render={(routerProps) => {
                let id = routerProps.match.params.id
                let product
                if (this.state.products.length > 0) {
                  product = this.state.products.find(el => el.id === id
                  )
                }
                return (
                  <>
                    {this.state.products.length > 0 && this.state.user ? <ProductShow product={product.attributes} clickHandler={this.cardShowClickHandler} userId={this.state.user.user.data.id} />
                      : <h1>Loading</h1>}
                  </>)
              }} />

            
          <Route path="/checkout"   render={() => <CartContainer removeCartItem={this.removeCartItem} cart={this.state.cart} makePurchase={this.makePurchase} cartIds={this.state.cartIds}/>} />
          <Route path="/orders"  render={() => <Orders clickHandler={this.productCardClickHandler} user={this.state.user} orders={this.state.orders}/>} />
          
          <Route path="/products"  render={() => <ProductContainer filterHandler={this.filterHandler} products={this.filterProduct()}  filterTerm={this.state.filterTerm} filterChange={this.filterChange}/>} />
          <Route path="/"  render={() => <Home product={this.state.products}/>} /></Switch>
          : <Switch> 
            
          <Route path="/signup" render={() => <Signup submitHandler={this.SignUpSubmitHandler}/>} /> 
          <Route path="/"  render={() => <Login loginHandler={this.loginHandler} error={this.state.error}/>} />
          </Switch>
        }
      
          </div>
     
      </div>
    );

  }

}

export default App;
