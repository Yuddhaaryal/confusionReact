import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


    
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
    const ShowDetails= ({dish}) => {
        if(dish!=null){
            const dishDescription =dish.comments.map((cmnt)=>{
           
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
       return (
            <div className="container">
                <div className="row">
                 <RenderDish dish={props.dish}/>
                 <ShowDetails dish={props.dish}/>
                 </div>
            </div>
        );   
    
}
export default DishDetail;