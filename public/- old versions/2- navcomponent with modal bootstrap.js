var React    = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router-dom').Link;
import { Button } from 'react-bootstrap';
var classNames = require('classnames');
var Modal = require('./modal.js');

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.openMenu = this.openMenu.bind(this);
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
              <Modal className='list-link'>Créer un profil</Modal>
              //<Modal className='list-link' title="Créer un profil">Créer un profil</Modal> puis passer les props dans modal.js {this.props.title}
            </li>

            <li className='list-item'>
              <Modal className='list-link'>Proposer une mission</Modal>
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
