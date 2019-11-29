import React, {Component} from 'react';
import Linkify from 'react-linkify';
import './Home.css';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import iPhoneX from "./iphonex.png";

//import TimeAgo from 'react-timeago';
class UserFeed extends Component {

constructor(props){
super(props);
}

render() {

let UserFeed = this.props.feedData
.map(function (feedData, index) {
return (
<div key={index}>
<Container>
 
  <Row >
    <Col><Linkify>{feedData.feed_id}</Linkify></Col>
    <Col><Linkify><a href={feedData.feed}>{feedData.feed}</a></Linkify></Col>
    <Col><Linkify>฿  {feedData.price}</Linkify></Col>
    <Col>
<Button id="del" variant="outline-danger" onClick={this.props.deleteFeed} data={feedData.feed_id} value={this.props.index}>DELETE</Button>
</Col>
  </Row>
</Container>
<br/>



</div>
)
}, this);

return (
<div>
{UserFeed}

</div>
);
}

}

export default UserFeed;