import React, {Component} from 'react';
import './Home.css';
import '../../styles/react-confirm-alert.css';
import watch from "./iphonexdetail.png";
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
class iPhoneX extends Component {

constructor(props) {
super(props);

}
render() {


return (
<div>
<br/><br/><br/><br/>
<h1>
    <Badge pill variant="success">iPhone X</Badge>
  </h1><br/>

<img src={watch}  width="350px" height="200px"/>
<br/><br/>

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Capacity
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- 64GB<br/>
- 256GB</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Display
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- Super Retina HD display<br/>
- 5.8-inch (diagonal) all-screen OLED Multi-Touch display<br/>
- HDR display<br/>
- 2436-by-1125-pixel resolution at 458 ppi<br/>
- 1,000,000:1 contrast ratio (typical)<br/>
- True Tone display<br/>
- Wide color display (P3)<br/>
- 3D Touch<br/>
- 625 cd/m2 max brightness (typical)<br/>
- Fingerprint-resistant oleophobic coating<br/>
- Support for display of multiple languages and characters simultaneously<br/>
- The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a <br/>
standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual <br/>
viewable area is less).</Card.Body>
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
      <Card.Body>- A11 Bionic chip with 64-bit architecture<br/>
- Neural engine<br/>
- Embedded M11 motion coprocessor</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Camera
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- 12MP wide-angle and telephoto cameras<br/>
- Wide-angle: ƒ/1.8 aperture<br/>
- Telephoto: ƒ/2.4 aperture<br/>
- Optical zoom; digital zoom up to 10x<br/>
- Portrait mode<br/>
- Portrait Lighting (beta)<br/>
- Dual optical image stabilization<br/>
- Six‑element lens<br/>
- Quad-LED True Tone flash with Slow Sync<br/>
- Panorama (up to 63MP)<br/>
- Sapphire crystal lens cover<br/>
- Backside illumination sensor<br/>
- Hybrid IR filter<br/>
- Autofocus with Focus Pixels<br/>
- Tap to focus with Focus Pixels<br/>
- Live Photos with stabilization<br/>
- Wide color capture for photos and Live Photos<br/>
- Improved local tone mapping<br/>
- Body and face detection<br/>
- Exposure control<br/>
- Noise reduction<br/>
- Auto HDR for photos<br/>
- Auto image stabilization<br/>
- Burst mode<br/>
- Timer mode<br/>
- Photo geotagging<br/>
- Image formats captured: HEIF and JPEG</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Power and Battery
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- Lasts up to 2 hours longer than iPhone<br/> 
- Talk time (wireless): Up to 21 hours<br/>
- Internet use: Up to 12 hours<br/>
- Video playback (wireless): Up to 13 hours<br/>
- Audio playback (wireless): Up to 60 hours<br/>
- Fast-charge capable: Up to 50% charge 30 minutes<br/>
- Built-in rechargeable lithium-ion battery<br/>
- Wireless charging (works with Qi-certified chargers)<br/>
- Charging via USB to computer system or power adapter</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Operating System
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>iOS 11<br/>
With new features and capabilities that let you get more done quickly and easily, iOS 11 makes iPhone <br/>
more powerful, personal, and intelligent than ever.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion><br/>
<Button href="/home" variant="outline-primary">Back to Shop</Button>

</div>

);
}
}

export default iPhoneX ;