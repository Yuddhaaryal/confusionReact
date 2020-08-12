import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent.js';
import Contact from './ContactComponent';
import Home from './HomeComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes.js';
import { PROMOTIONS } from '../shared/propotions.js';
import { LEADERS } from '../shared/leaders.js';
import { COMMENTS } from '../shared/comments.js';


class Main extends Component{
  constructor(props){
    super(props);
    this.state= {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS
    };
}

  render() {
      const HomePage = () => {
          return (
              <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
              />
          );
      }
    return (
      <div>
        <Header/>
        <Switch>
            <Route path = "/home" component = { HomePage }/>
            <Route exact path = "/menu" component = { () => <Menu dishes={this.state.dishes}/> }/>
            <Route exact path = "/contactus" component = { Contact }/>
            <Redirect to ="/home"/>
        </Switch>
   
        <Footer/>
      </div> 
    );
  }
}

export default Main;
