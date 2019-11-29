import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import iphonex from "./iphonex.png";
import iphonex1 from "./iphonex1.png";
import ipad from "./ipad.png";
import ipad1 from "./ipad1.png";
import watch from "./watch.png";
import watch1 from "./watch1.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'




class Home extends Component {
    

constructor(props) {
super(props);

this.state = {
data:[],
redirectToReferrer: false,
userFeed1:'iPhoneX',
userFeed2:'iPad',
userFeed3:'AppleWatch',
price1:25000,
price2:30000,
price3:12000,
name:'',
};

this.getUserFeed = this.getUserFeed.bind(this);
this.addcart = this.addcart.bind(this);
this.feedUpdate1 = this.feedUpdate1.bind(this);
this.feedUpdate2 = this.feedUpdate2.bind(this);
this.feedUpdate3 = this.feedUpdate3.bind(this);
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

//---------------------------Add Product----------------------------
addcart(){
    confirmAlert({
    title: 'ADD TO CART',
    message: 'Product have been added to your cart.',
    buttons: [{ label: 'CONTINUE'},{ label: 'GO TO CART',onClick: () => window.location.href = "/cart"}]});
}
feedUpdate1(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed1,price: this.state.price1};
    if (this.state.userFeed1) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}

feedUpdate2(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed2,price: this.state.price2 };
    if (this.state.userFeed2) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    });
    }
}
feedUpdate3(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed3,price: this.state.price3};
    if (this.state.userFeed3) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
//---------------------------------------------------------
getUserFeed() {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};

    if (data) {
    PostData('feed', postData).then((result) => {
    let responseJson = result;
    if(responseJson.feedData){
    this.setState({data: responseJson.feedData});
    
    }
    });
    }
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
<div>
  <br/><br/><br/>


<Carousel>
  <Carousel.Item>
  <Image src={iphonex} fluid />
  <br/>
    <Carousel.Caption>
      
    <Button href="/iphonex" variant="outline-dark">iPhone X</Button>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src={ipad} fluid/>
  <br/>
    <Carousel.Caption>
    <Button href="/ipad" variant="outline-dark">iPad Pro 2019</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src={watch} fluid/>
  <br/>
    <Carousel.Caption>
    <Button href="/applewatch" variant="outline-dark">Apple Watch Series 5</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<br/>
<h1>
    <Badge pill variant="outline-primary">MOST POPULAR</Badge>
  </h1>
  <br/>
<Container>
  <Row>
    <Col xs><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={iphonex1} />
  <Card.Body>
    <Card.Title>iPhone X</Card.Title>
    <Card.Text>
    The iPhone X was Apple's flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition and 3D camera functionality, a glass body, and an A11 Bionic processor.
    </Card.Text>
    <form onSubmit={this.feedUpdate1} method="post">
    <Card.Title>Price : ฿ {this.state.price1}</Card.Title>
    <Button href="/iphonex" variant="success" >Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
    </Card.Body>
</Card></Col>
    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={watch1} />
  <Card.Body>
    <Card.Title>Apple Watch Series 5</Card.Title>
    <Card.Text>
    The new Series 5 runs on a new Apple S5 chip inside: 64-bit dual-core S5 processor, up to 2x faster than S3 processor (includes W3 wireless chip). Apple Watch bands now include purchasable gold.
    </Card.Text>
    <form onSubmit={this.feedUpdate3} method="post">
    <Card.Title>Price : ฿ {this.state.price3}</Card.Title>
    <Button href="/applewatch" variant="success">Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
  </Card.Body>
</Card></Col>
    <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ipad1} />
  <Card.Body>
    <Card.Title>iPad Pro 2019</Card.Title>
    <Card.Text>
    Apple in October introduced upgraded 11-inch and 12.9-inch iPad Pro models that feature edge-to-edge displays that do away with the Home button, slim bezels all the way around.
    </Card.Text>
    <form onSubmit={this.feedUpdate2} method="post">
    <Card.Title>Price : ฿ {this.state.price2}</Card.Title>
    <Button href="/ipad" variant="success">Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
</div>

);
}
}

export default Home;