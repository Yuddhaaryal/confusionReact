import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

    
    function RenderDish({ dish }) {
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
    const ShowDetails= ({comment}) => {
        if(comment!=null){
            const dishDescription =comment.map((cmnt)=>{
           
                var d= Intl.DateTimeFormat(('en-US'),{ year:'numeric',month:'short',day:'2-digit'})
                .format(new Date(Date.parse(cmnt.date)));
  
                return(
                <div>
                <ul className="list-unstyled">
                    <li >{cmnt.comment}</li>
                    <li >{cmnt.author},{d}</li>
                   
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
 
    
   
    const DishDetail = (props) => {
        if(props.dish != null)
       return (
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
                 <RenderDish dish={props.dish}/>
                 <ShowDetails comment={props.comment}/>
                 </div>
            </div>
        );   
       
}
export default DishDetail;