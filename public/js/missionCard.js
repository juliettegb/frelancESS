import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
var ReactDOM = require('react-dom');

class MissionCard extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
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
        </Row>
      </Grid>
      </div>
    );
  };
};

module.exports = MissionCard;
