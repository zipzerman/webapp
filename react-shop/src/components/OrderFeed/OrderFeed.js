import React, {Component} from 'react';
import Linkify from 'react-linkify';
import './Home.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import correct from "./correct.png";


//import TimeAgo from 'react-timeago';
class OrderFeed extends Component {

constructor(props){
super(props);
}

render() {

let Feedorder = this.props.OrderfeedData.map(function (OrderfeedData) {
return (
<div>


<Container>
 
  <Row >
    <Col><Linkify>&nbsp;&nbsp;&nbsp;&nbsp;<a href={OrderfeedData.feed}>{OrderfeedData.feed}</a></Linkify></Col>
    <Col><Linkify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;฿  {OrderfeedData.price}</Linkify></Col>
    <Col><Linkify>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{OrderfeedData.time}</Linkify></Col>
    <Col><Linkify>{OrderfeedData.date}</Linkify></Col>
    <Col>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="outline-success"><img src={correct} width="30px"/></Button></Col>
  </Row>
</Container>
<br/>

</div>
)
}, this);

return (
<div>
{Feedorder}

</div>
);
}

}

export default OrderFeed;