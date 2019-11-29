import React, { Component } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
        data:[],
        redirectToReferrer: false,
        name:'',
        };
        this.getUserFeed = this.getUserFeed.bind(this);
        this.logout = this.logout.bind(this);
        }
        
        componentWillMount() {
        
        if(sessionStorage.getItem("userData")){
        this.getUserFeed();
        }
        
        else{
        this.setState({redirectToReferrer: true});
        }
        
        }
        getUserFeed() {

            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({name:data.userData.name});
        }
        logout(){
            sessionStorage.setItem("userData",'');
            sessionStorage.clear();
            window.location.href = "/login";
            }
    
render() {
return (
<div>
<Navbar bg="primary" variant="dark" expand="lg" fixed="top" >
  <Navbar.Brand href="/home">iJune</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Shop</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/order">My Order</Nav.Link>
      <NavDropdown title={this.state.name} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
);
}
}
export default Header;