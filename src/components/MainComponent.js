import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent.js';

import Home from './HomeComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes.js';


class Main extends Component{
  constructor(props){
    super(props);
    this.state= {
      dishes: DISHES,
      
    };
}

  render() {
      const HomePage = () => {
          return (
              <Home/>
          );
      }
    return (
      <div>
        <Header/>
        <Switch>
            <Route path = "/home" component = { HomePage }/>
            <Route exact path = "/menu" component = { () => <Menu dishes={this.state.dishes}/> }/>
            <Redirect to ="/home"/>
        </Switch>
   
        <Footer/>
      </div> 
    );
  }
}

export default Main;
