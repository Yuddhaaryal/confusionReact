import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentformComponent';
import {Loading} from './LoadingComponent';


import {baseUrl} from '../shared/baseUrl';



    function RenderDish({ dish }) {
     
        if(dish!=null) {
            return(
                <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardImg  width="100%" top src={baseUrl+dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                        </Card>
                    </div>
                );
        }
        else {
            return (<div></div>);
        }
    }
    const ShowDetails= ({comment,postComment, dishId}) => {
        if(comment!=null){
            const dishDescription =comment.map((cmnt)=>{
           
                var d= Intl.DateTimeFormat(('en-US'),{ year:'numeric',month:'short',day:'2-digit'})
                .format(new Date(Date.parse(cmnt.date)));
  
                return(
                <div>
                <ul className="list-unstyled">
                    <li key='id'>{cmnt.comment}</li>
                    <li key='id'>{cmnt.author},{d}</li>
                   
                </ul>
                </div>
                );
            });
            return(
             <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {dishDescription }
                <CommentForm  dishId={dishId} postComment={postComment}/>
            </div>    
            );
        }
        else {
        return (<div></div>);
        }
    }
    const DishDetail = (props) => {
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            )
        }
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                    <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }
        else
        return(
        <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link  to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                 <RenderDish dish={props.dish} />
                 <ShowDetails comment={props.comment}
                              postComment={props.postComment}
                              dishId={props.dish.id}/>
                   
                  </div>
            </div>

        );   
       
}
export default DishDetail;