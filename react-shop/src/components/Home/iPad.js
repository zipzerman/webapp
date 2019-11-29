import React, {Component} from 'react';
import './Home.css';
import '../../styles/react-confirm-alert.css';
import watch from "./ipaddetail.png";
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class iPad extends Component {

constructor(props) {
super(props);

}
render() {


return (
<div >
<br/><br/><br/><br/>
<h1>
    <Badge pill variant="success">iPad Pro 2019</Badge>
  </h1><br/>
<img src={watch}  width="600px" height="200px"/>
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
- 256GB<br/>
- 512GB<br/>
- 1TB</Card.Body>
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
      <Card.Body>- Liquid Retina display<br/>
- 11-inch (diagonal) LED-backlit <br/>
- Multi‑Touch display with IPS technology<br/>
- 2388-by-1668-pixel resolution at 264 <br/>
pixels per inch (ppi)<br/>
- ProMotion technology<br/>
- Wide color display (P3)<br/>
- True Tone display<br/>
- Fingerprint-resistant oleophobic coating<br/>
- Fully laminated display<br/>
- Antireflective coating<br/>
- 1.8% reflectivity<br/>
- 600 nits brightness</Card.Body>
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
      <Card.Body>- A12X Bionic chip with 64-bit architecture<br/>
- Neural Engine<br/>
- Embedded M12 coprocessor</Card.Body>
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
      <Card.Body>- 12-megapixel camera<br/>
- ƒ/1.8 aperture<br/>
- Digital zoom up to 5x<br/>
- Five‑element lens<br/>
- Quad-LED True Tone flash<br/>
- Panorama (up to 63 megapixels)<br/>
- Sapphire crystal lens cover<br/>
- Backside illumination sensor<br/>
- Hybrid IR filter<br/>
- Autofocus with Focus Pixels<br/>
- Tap to focus with Focus Pixels<br/>
- Live Photos with stabilization<br/>
- Wide color capture for photos and Live Photos<br/>
- Improved local tone mapping<br/>
- Exposure control<br/>
- Noise reduction<br/>
- Smart HDR for photos<br/>
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
      Operating System
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- iPadOS comes with powerful features and built-in apps designed to take<br/> 
advantage of the unique capabilities of iPad.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<br/>
<Button href="/home" variant="outline-primary">Back to Shop</Button>
</div>

);
}
}

export default iPad;