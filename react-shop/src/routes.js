import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import iPhoneX from '././components/Home/iPhoneX';
import iPad from '././components/Home/iPad';
import AppleWatch from '././components/Home/AppleWatch';
import Cart from '././components/Cart/Cart';
import Order from '././components/Order/Order';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Welcome}/>
<Route path="/home" component={Home}/>
<Route path="/iphonex" component={iPhoneX}/>
<Route path="/ipad" component={iPad}/>
<Route path="/applewatch" component={AppleWatch}/>
<Route path="/cart" component={Cart}/>
<Route path="/order" component={Order}/>
<Route path="/login" component={Login}/>
<Route path="/Signup" component={Signup}/>
<Route path="*" component={NotFound}/>
</Switch>
</BrowserRouter>
);
export default Routes;