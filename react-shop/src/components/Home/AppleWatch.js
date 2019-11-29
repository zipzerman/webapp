import React, {Component} from 'react';
import './Home.css';
import '../../styles/react-confirm-alert.css';
import watch from "./watchdetail.png"
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
class AppleWatch extends Component {

constructor(props) {
super(props);

}
render() {


return (
<div>
<br/><br/><br/><br/>
<h1>
    <Badge pill variant="success">Apple Watch Series 5</Badge>
  </h1><br/>
<img src={watch}  width="550px" height="200px"/>
<br/><br/>

<Accordion defaultActiveKey="0">
 <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Features
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- GPS, GLONASS, Galileo, and QZSS<br/>
- Compass<br/>
- Barometric altimeter<br/>
- Water resistant 50 meters<br/>
- Electrical heart sensor<br/>
- Second-generation optical heart sensor<br/>
- International emergency calling<br/>
- Emergency SOS<br/>
- Accelerometer up to 32 g-forces<br/>
- Gyroscope<br/>
- Ambient light sensor<br/>
- Speaker<br/>
- Microphone<br/>
- Apple Pay<br/>
- GymKit<br/>
- Capacity 32GB<br/>
- Ceramic and sapphire crystal back</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
 <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Chip
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- S5 with 64-bit dual-core processor<br/>
- W3 Apple wireless chip</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
 <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Connectivity
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- LTE and UMTS3<br/>
- GPS + Cellular models<br/>
- WiFi 802.11b/g/n 2.4GHz<br/>
- Bluetooth 5.0</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
 <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Power
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- Built-in rechargeable lithium-ion battery Up to 18 hours<br/>
- Magnetic charging cable<br/>
- USB power adapter</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


<br/><Button href="/home" variant="outline-primary">Back to Shop</Button>
</div>

);
}
}

export default AppleWatch;