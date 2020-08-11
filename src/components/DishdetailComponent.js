import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    
    renderDish(dish){
        if(dish!=null) {
            return (
                
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardImg  width="100%" top src={dish.image} alt={dish.name}/>
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
    dishDetail(dish){
        if(dish!=null){
            const dishDescription =dish.comments.map((cmnt)=>{
           
                var d= Intl.DateTimeFormat(('en-US'),{ year:'numeric',month:'short',day:'2-digit'})
                .format(new Date(Date.parse(cmnt.date)));
  
                return(
                <div>
                <ul className="list-unstyled">
                    <li key="id">{cmnt.comment}</li>
                    <li key="id">{cmnt.author},{d}</li>
                   
                </ul>
                </div>
                );
            });
            return(
             <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {dishDescription}
            </div>    
            );
        }
        else {
        return (<div></div>);
        }
    }
   
    render(){
        var dish= this.renderDish(this.props.dish);
        var dishDetail= this.dishDetail(this.props.dish);
        return (
            <div className="container">
                <div className="row">
                 {dish}
                 {dishDetail}
                </div>
            </div>
        );   
    }
}
export default DishDetail;