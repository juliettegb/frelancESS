var React    = require('react');
var ReactDOM = require('react-dom');
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

var NavComponent = require('./navcomponent.js');

class FreelanceGrid extends React.Component {

  constructor() {
   super();
  }

  render() {
    return (

    <div className="fiche">

    <NavComponent/>

    <div className="bottomHome card">

      <Row>
        <Col xs={6} md={3}>
        <Card>
          <CardImg top width="100%" src="/assets/DD.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card>
          <CardImg top width="100%" src="/assets/DD.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card>
          <CardImg top width="100%" src="/assets/DD.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card>
          <CardImg top width="100%" src="/assets/DD.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
      </Row>

    </div>

    </div>

    );
  }
}

module.exports = FreelanceGrid;
