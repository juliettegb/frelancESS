var React    = require('react');
var ReactDOM = require('react-dom');
import ReactBootstrap from 'react-bootstrap';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

var NavComponent = require('./navcomponent.js');

class FreelanceGrid extends React.Component {

  constructor() {
   super();
  }

  render() {
    return (

    <div className="fiche">

    <NavComponent/>

    <div className="bottomHome">
    <Grid className="card">
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src="/assets/DD.png" alt="242x200">
            <h3>Titre mission</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" className="details" href="/mission">Détails</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>
    </div>
    </div>

    );
  }
}

module.exports = FreelanceGrid;
