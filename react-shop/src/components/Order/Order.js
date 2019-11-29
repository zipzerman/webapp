import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import OrderFeed from "../OrderFeed/OrderFeed";
import '../../styles/react-confirm-alert.css';
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
class Order extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
redirectToReferrer: false,
name:'',
};
this.getOrderFeed = this.getOrderFeed.bind(this);

this.onChange = this.onChange.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getOrderFeed();
}

else{
this.setState({redirectToReferrer: true});
}

}
editFeed(e){

alert("j");
}

getOrderFeed() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: data.userData.user_id};

if (data) {
PostData('OrderFeed', postData).then((result) => {
let responseJson = result;
if(responseJson.OrderfeedData){
this.setState({data: responseJson.OrderfeedData});

}
});
}

}
    
onChange(e){
this.setState({userFeed:e.target.value});
}

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
<div >

<br/><br/><br/>
    
    <h1>
       <Badge pill variant="success">My Order</Badge>
      </h1>
      <br/>
    
    <Table striped bordered hover variant="success">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Time</th>
          <th>Date</th>
          <th>Payment</th>
        </tr>
      </thead>
    </Table>

<OrderFeed OrderfeedData = {this.state.data}/>



</div>

);
}
}

export default Order;