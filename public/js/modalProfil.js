var React    = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

var FormInscriptionRedux = require('./formInscription.js');

class TriggerInscription extends React.Component {

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
        <Button className="buttonNav" outline color="secondary" onClick={this.toggle}>Créer un profil</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Créer un profil</ModalHeader>
          <ModalBody>
            <FormInscriptionRedux/>
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

module.exports = TriggerInscription;
