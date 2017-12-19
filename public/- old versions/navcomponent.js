var React    = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router-dom').Link;
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
var classNames = require('classnames');

var Modal = require('./inscription.js');

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.state = {
      open: false
    };
    this.openMenu = this.openMenu.bind(this)
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
            <img className='logo-img' src='../assets/logo.png' href='/home'/>
          </h3>
          <ul className={menuStyle}>
            <li className='list-item'>
              <a className='list-link' onClick={() => this.openModal()}>Créer un profil</a>
              <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                <h1>Modal title</h1>
                <p>hello</p>
                <p><Button onClick={() => this.closeModal()}>Close</Button></p>
              </Modal>
            </li>
            <li className='list-item'>
            <a className='list-link' onClick={() => this.openModal()}>Proposer une mission</a>
            <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
              <h1>Modal title</h1>
              <p>hello</p>
              <p><Button onClick={() => this.closeModal()}>Close</Button></p>
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
