import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route,  Redirect } from  "react-router-dom";


 //Pages
 import MainPage from "./MyComponents/MainPage";
 import Header from "./MyComponents/Header";
import MyNavBar from './MyComponents/MyNavbar';
import Footer from './MyComponents/Footer';
  
 export class App extends Component {
  render(){
  return (
    <Router>
      <MyNavBar/>
      <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/home" component={MainPage} />
      {/* <Redirect to="/Header" /> */}
      </Switch>
      <Footer/>
    </Router>
    );
  }
}
export default App 



