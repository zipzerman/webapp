import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
class Cart extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
T:'',
redirectToReferrer: false,
name:'',
email:'',
};
this.Checkout = this.Checkout.bind(this);
this.getUserFeed = this.getUserFeed.bind(this);
this.getFeedTotal = this.getFeedTotal.bind(this);
this.deleteFeed = this.deleteFeed.bind(this);
this.deleteFeedAction = this.deleteFeedAction.bind(this);
this.logout = this.logout.bind(this);
this.confirmcheck = this.confirmcheck.bind(this);
}

UNSAFE_componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getUserFeed();
this.getFeedTotal();
}

else{
this.setState({redirectToReferrer: true});
}

}

deleteFeed(e){

confirmAlert({
title: 'Delete Product',
message: 'Are you sure to delete this product from cart.',
buttons: [{label: 'YES',onClick: () => this.deleteFeedAction(e)},{label: 'NO',}]});}

deleteFeedAction(e){

let updateIndex=e.target.getAttribute('value');

let feed_id=document.getElementById("del").getAttribute("data");

let data = JSON.parse(sessionStorage.getItem("userData"));

let postData = { user_id: data.userData.user_id,feed_id: feed_id };
if (postData) {

PostData('feedDelete', postData).then((result) => {
this.state.data.splice(updateIndex,1);
this.setState({data:this.state.data});
if(result.success){
window.location.href = "/cart";
}
else
alert(result.error);

});
}
}

//-----------------------Show product in cart-------------------
getUserFeed() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
this.setState({email:data.userData.email});
let postData = { user_id: data.userData.user_id};

if (data) {
PostData('feed', postData).then((result) => {
let responseJson = result;
if(responseJson.feedData){
this.setState({data: responseJson.feedData});

}
});
}
//--------------------Show total price from database------------------------
}
getFeedTotal() {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};
    
    if (data) {
    PostData('feedTotal', postData).then((result) => {
    let responseJson = result;
    this.setState({T: responseJson.Total});
    
    });
    }
    
}
//-------------------Check out product-----------------------------
    Checkout() {

        let data = JSON.parse(sessionStorage.getItem("userData"));

        let postData = {user_id: data.userData.user_id,email: data.userData.email,name: data.userData.name};
        if (postData) {
            PostData('Checkout', postData).then((result) => {
            if(result.success){
            window.location.href = "/order";
            }
          });
        }
}  
//-------------------------------------
confirmcheck(){
    confirmAlert({
    title: 'CONFIRM',
    message: 'Are you sure to check out this Shopping Cart.',
    buttons: [{ label: 'YES',onClick: () => this.Checkout()},{ label: 'NO'},]});
}
//----------------------------------------           

logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}


render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}

return (

<div>
  <br/><br/><br/>
    
<h1>
   <Badge pill variant="primary">Shopping Cart</Badge>
  </h1>
  <br/>

<Table striped bordered hover variant="primary">
  <thead>
    <tr>
      <th>No.</th>
      <th>Product</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
</Table>



<UserFeed feedData = {this.state.data} deleteFeed = {this.deleteFeed} name={this.state.name}/><hr/>
<h4>Total Price : {this.state.T}</h4><hr/>

<Accordion defaultActiveKey="0">
  
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      <Button variant="outline-success">PROCEED TO CHECKOUT</Button>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <input type="text" placeholder="Address" required/>
      <input type="text" placeholder="Tel." required/>
      <input type="text" placeholder="Credit Card" required/>
      <Button variant="success" onClick={this.confirmcheck}>CONFIRM</Button>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


</div>


);
}
}

export default Cart;