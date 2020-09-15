import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {postComment, fetchDishes, fetchComments, fetchPromos,fetchLeaders,postFeedback} from '../redux/ActionCreator';
import {actions} from 'react-redux-form'; 
import { connect } from 'react-redux';
import Menu from './MenuComponent.js';
import DishDetail from './DishdetailComponent.js';
import Contact from './ContactComponent.js';
import Home from './HomeComponent.js';
import About from './AboutusComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
const mapStateToProps = (state) =>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    
 
  }
}

const mapDispatchToProps = (dispatch)=> ({
  
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (Feedback) => dispatch(postFeedback(Feedback)),

  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  resetFeedbackForm: () => dispatch(actions.reset('feedback'))

});




class Main extends Component{

  componentDidMount(){
    this.props.fetchDishes()
    this.props.fetchComments()
    this.props.fetchPromos()
    this.props.fetchLeaders()
    
      
    
 

  }

  render() {
      const HomePage = () => {
          return (
              <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading ={this.props.dishes.isLoading}
                    dishesErrMess = {this.props.dishes.errMess}

                    promotion = {this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading = {this.props.promotions.isLoading}
                    promoErrMess ={this.props.promotions.errMess}

                    leader = {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leaderErrMess= {this.props.leaders.errMess}
                    leadersLoading = {this.props.leaders.isLoading}


              />
          );
      }
      const DishwithId = ({match}) => {
          return (
            <DishDetail dish = { this.props.dishes.dishes.filter((dish) => dish.id===parseInt(match.params.dishId, 10))[0]}
                        isLoading ={this.props.dishes.isLoading}
                        errMess = {this.props.dishes.errMess}

                        comment = { this.props.comments.comments.filter((comment) => comment.dishId===parseInt(match.params.dishId, 10))}
                        commentsErrMess = { this.props.comments.errMess }

                        postComment={this.props.postComment}
            />
          );
      }
    return (
      <div>
        <Header/>
        <Switch>
            <Route path= "/home" component = { HomePage }/>
            <Route exact path = "/menu" component = { () => <Menu dishes={this.props.dishes}/> }/>
            <Route  path = "/menu/:dishId" component = { DishwithId }/>
            <Route exact path = "/contactus" component = {() => 
              <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                       postFeedback={this.props.postFeedback}
                       
                       
                      />}/>
            <Route  path = "/aboutus" component  = { () =><About leaders={this.props.leaders}/>} />
            <Redirect to ="/home"/>
        </Switch>
   
        <Footer/>
      </div> 
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
