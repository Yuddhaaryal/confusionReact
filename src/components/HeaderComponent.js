import React, { Component } from 'react';
import { Nav, NavItem, Navbar,  NavbarBrand, NavbarToggler, Collapse, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor () {
        super ();
        this.state = { 
            isNavOpen : false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.validate = this.validate.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    toggleNav () {
        this.setState(
            { isNavOpen : !this.state.isNavOpen }
            )
    }
    toggleModal(){
        this.setState({
        isModalOpen : !this.state.isModalOpen
        })
    }
    handleSubmit(event){
        const username=this.username.value
        const password= this.password.value
       
        this.toggleModal()
        const errors=this.validate(username,password)
        alert(errors.username)
        event.preventDefault()
    }
  
     validate (username,password){
         const errors={
             username : '',
             password : ''
         }
         if(username.length<3)
         errors.username= "username should bebetween 3 to 9 character";
         if(password.split('').filter((x) => x==="@").length !== 0)
         errors.password="Password cannot contain @";
         return errors;
     }
     
    render (){
       
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={ this.toggleNav }/>
                        <NavbarBrand className="mr-auto" href="./home">
                            <img src="assets/images/logo.png"  height='30' width='41' alt="Restorante Con Fusion"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="./home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="./aboutus"><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="./menu"><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="./contactus"><span className="fa fa-address-card fa-lg"></span>Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                               <Nav className="ml-auto">
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>   
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h3>Restorante Con Fusion</h3>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>

                        </div>

                    </div>

                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Log in</ModalHeader>
                    <ModalBody>
                        <Form onSubmit= {this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" placeholder="Username" 
                                innerRef={(input) => this.username= input}
                              />
                               
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" placeholder="Password"
                                innerRef={ (input) => this.password= input }
                               />
                            </FormGroup>
                            <FormGroup check>
                                <Label Check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember=input}
                                    />Remember
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" color="primary" value="submit">Log in</Button>
                            </FormGroup>
                        </Form>

                    </ModalBody>
                </Modal>
 
            </div>

        

        );
    }
}
export default Header;