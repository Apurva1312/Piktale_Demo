import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route,  Redirect } from  "react-router-dom";


 //Pages
 import MainPage from "./MyComponents/MainPage";
 import Footer from "./MyComponents/Footer";
  
 export class App extends Component {
  render(){
  return (
    <Router>
    <Switch>
    <Route exact path="/home" component={MainPage} />
    <Redirect to="/Header" />
    <Route exact path="/" component={Footer} />
    </Switch>
    </Router>
    );
  }
}
export default App 



