import React, { Component } from 'react';
import {  Button,ModalHeader,Modal,ModalBody, Row, Col,Label} from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state= {
            isModalOpen: false
        }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState(
            { isModalOpen: !this.state.isModalOpen }
        )
    }
    handleSubmit(values){
        this.toggleModal();
       
        this.props.addComment(this.props.dishId, values.rating, values.name, values.comment);
    }
    render (){
        const required = (val) => val && val.length
        const minLength = (min) => (val) =>(!(val && val.length) || val )&& val.length>=min
  
        const maxLength = (max) => (val) => !val || val.length<=max
        return(
            <div className="container">
                <div>
                <button className="btn btn-primary" onClick={this.toggleModal}>Add Comment</button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               
                    <ModalHeader toggle={this.toggleModal}>
                    Submit Feedback</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row>
                                <Label md={3}  htmlFor='Rating'>Rating</Label>
                                <Col  >
                                    <Control.select className="form-control"  model=".rating" id="Rating" name="Rating">
                                      
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row >
                            <Row>
                                <Label md={3} htmlFor="Name">Your Name</Label>
                                <Col  >
                                <Control.text className="form-control" model=".name" id="Name" name="Name" 
                                    validators={{required,  maxLength: maxLength(10),minLength: minLength(2)}}/>
                                    <Errors className="text-danger" model=".name" show="touched"
                                    messages = { {
                                    required: "This field is required",
                                    minLength: "Must be greater than 2 character",
                                    maxLength: "Must be less tahn 15 character"
                                    }}/>
                                </Col>
                                
                                
                            </Row>
                            <Row >
                                <Label md={3} htmlFor="Comment">Comment</Label>
                                <Col >
                                <Control.textarea className="form-control" model=".comment" id="Comment" name="Comment" rows="6"/>
                                </Col>
                            </Row>
 
                           <Button color="primary">Submit comment</Button>
                           
                        </LocalForm>
                    </ModalBody>
                    </Modal>
              
           </div>
        );
    }
}
export default CommentForm;


