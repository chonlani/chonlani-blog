import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Product from './components/Product'
import Users from './components/Users'
import Register from './components/Register'
import Login from './components/Login'




function App() {
  return (
    <div >
      <Header />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/product" component={Product} />
        <Route path="/users" component={Users} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      
      <Footer />
    </div>
  );
}
export default App;
