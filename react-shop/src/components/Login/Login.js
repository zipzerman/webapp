import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './Home.css';
import Container from 'react-bootstrap/Container'
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
class Login extends Component {
constructor(){
super();
this.state = {
username: '',
password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
if(this.state.username && this.state.password){
PostData('login',this.state).then((result) => {
let responseJson = result;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
window.location.href = "/home";
}
else
alert(result.error);
});
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/home'}/>)
}
if(sessionStorage.getItem('userData')){
return (<Redirect to={'/home'}/>)
}
return (
<div>
<Container>
  <Row>
    <Col xs></Col>
    <Col xs={{ order: 12 }}></Col>
    <Col xs={{ order: 1 }}>  <h1>
    <Badge variant="primary">Login</Badge>
  </h1>
    Username :
    <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
    Password :
    <input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
    <Button variant="success" type="submit" onClick={this.login}>Login</Button>
    <Button  href="/signup" variant="outline-primary" >Registration</Button></Col>
  </Row>
</Container>
</div>
);
}
}
export default Login;