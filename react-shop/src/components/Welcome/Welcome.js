import React, {Component} from 'react';
import './Home.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

class Welcome extends Component {
    
render() {
return (
<div className="bg">
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1 style={{marginLeft:'30%'}}>
    <Badge variant="primary">Welcome to iJune Shop</Badge>
  </h1>
  <br/><br/><br/><br/>
<div className="d-flex flex-column">
  <ButtonGroup size="lg">
    <Button variant="success" href="/login">Login</Button>
    <Button href="/signup">Signup</Button>
    
  </ButtonGroup>
  </div>
</div>
);
}
}
export default Welcome;