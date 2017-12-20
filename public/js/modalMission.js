var React    = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

var FormMissionRedux = require('./formMission.js');

class TriggerDepot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
      this.setState({
        modal: !this.state.modal
      });
  }

  render() {

    return (
      <div>
        <Button className="buttonNav" outline color="secondary" onClick={this.toggle}>Proposer une mission</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Proposer une mission</ModalHeader>
          <ModalBody>
            <FormMissionRedux/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

module.exports = TriggerDepot;
