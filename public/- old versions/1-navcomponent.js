var React    = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router-dom').Link;
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
var classNames = require('classnames');
var Modal = require('./modal.js');
//Possibilité de changer le nom de la balise genre ModalMission et ModalInscription
var SimpleFormRedux = require('./formInscription.js');
var DepoFormRedux = require('./depotMission.js');

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpenInscription: false,
      isModalOpenMission: false,
      open: false
    };

    this.openMenu = this.openMenu.bind(this);
    this.openModalInscription = this.openModalInscription.bind(this);
    this.openModalMission = this.openModalMission.bind(this);
  }

  openModalInscription(){
    this.setState({ isModalOpenInscription: true })
  }

  openModalMission(){
      this.setState({ isModalOpenMission: true })
  }


  closeModalInscription() {
    this.setState({ isModalOpenInscription: false })
  }

  closeModalMission() {
    this.setState({ isModalOpenMission: false })
  }

  openMenu(event) {
    event.preventDefault();
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let menuStyle = classNames({
      'list': true,
      'open': this.state.open
    });

    return (
      <header className='header'>
        <nav className='nav'>
          <h3 className='logo-wrapper'>
            <img className='logo-img' src='../assets/logo.png' href='/'/>
          </h3>
          <ul className={menuStyle}>
          <li className='list-item'>
            <a className='list-link' onClick={() => this.openModalInscription()}>Créer un profil</a>
            <Modal isOpen={this.state.isModalOpenInscription} onClose={() => this.closeModalInscription()}>
              <SimpleFormRedux/>
              <p><Button onClick={() => this.closeModalInscription()}>Close</Button></p>
            </Modal>
          </li>
            <li className='list-item'>
            <a className='list-link' onClick={() => this.openModalMission()}>Proposer une mission</a>
            <Modal isOpen={this.state.isModalOpenMission} onClose={() => this.closeModalMission()}>
              <DepoFormRedux/>
              <p><Button onClick={() => this.closeModalMission()}>Close</Button></p>
            </Modal>
            </li>
            <li className='list-item'>
              <a className='list-link' href='/freelances'>Trouver un freelance</a>
            </li>
          </ul>
          <div className='open-menu' onClick={this.openMenu}>
            <div className='menu'>
              <span className='stripe'></span>
              <span className='stripe'></span>
              <span className='stripe'></span>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

module.exports = NavComponent;


/*
import {Button} from 'react-bootstrap'
<header className='header'>
  <nav className='nav'>
    <h3 className='logo-wrapper'>
      <img className='logo-img' src='../assets/logo.png'/>
    </h3>
    <ul className={menuStyle}>
      <li className='list-item'>
        <a className='list-link' href='#'><Button className="btn btn-default">Proposer une mission</Button></a>
      </li>
      <li className='list-item'>
        <a className='list-link' href='#'><Button className="btn btn-default">Trouver un freelance</Button></a>
      </li>
      <li className='list-item'>
        <a className='list-link' href='#'><Button className="btn btn-default">Créer un profil</Button></a>
      </li>
    </ul>
    <div className='open-menu' onClick={this.openMenu}>
      <div className='menu'>
        <span className='stripe'></span>
        <span className='stripe'></span>
        <span className='stripe'></span>
      </div>
    </div>
  </nav>
</header>
*/
