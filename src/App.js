import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './components/Home'
import { Login } from './components/Screen/Login'
import { Product } from './components/Product'
import { Register } from './components/Screen/Register'
import { Laptop } from './components/Screen/Laptop'
import { Mobile } from './components/Screen/Mobile'
import { Audio } from './components/Screen/Audio'
import { Cart } from './components/Cart'
import { About } from './components/Screen/About'
import { AddProducts } from './components/AddProducts'
import { Cashout } from './components/Cashout.js'
import { NotFound } from './components/Screen/NotFound'

import { auth, db } from './Config/Config'

import { CartContextProvider } from './Global/CartContext'
import { ProductsContextProvider } from './Global/ProductsContext'

export class App extends Component {

  state = {
      user: null,
  }

  componentDidMount() {
    

      // getting user info for navigation bar
      auth.onAuthStateChanged(user => {
          if (user) {
              db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                  this.setState({
                      user: snapshot.data().Name
                  })
              })
          }
          else {
              this.setState({
                  user: null
              })
          }
      })

  }

  render() {

    return (
      <>

      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Switch>

              <Route exact path="/"
                component={() =>
                  <Home user={this.state.user}
                />}
              />

              <Route path="/signup"
                component={ Register }
              />

              <Route path="/login"
                component={ Login }
              />

              <Route path="/laptop"
                component={ ()=><Laptop user={this.state.user}/> }
              />

              <Route path="/mobile"
                component={ ()=><Mobile user={this.state.user}/> }
              />

              <Route path="/audio"
                component={ ()=><Audio user={this.state.user}/> }
              />

              <Route path="/about"
                component={() =>
                  <About user={this.state.user}
                />}
              />

              <Route path="/product"
                component={() =>
                  <Product user={this.state.user}
                />}
              />

              <Route path="/cart"
                component={() =>
                  <Cart user={this.state.user}
                />}
              />

              <Route path="/addproducts"
                component={AddProducts}
              />

              <Route path="/cashout"
                component={() =>
                  <Cashout user={this.state.user}
                />}
              />

              <Route component={NotFound} />

            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
        </>
      );
  }
}

export default App
