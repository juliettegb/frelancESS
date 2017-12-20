var React    = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router-dom').Link;
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

var ModalProfil = require('./modalProfil.js');
var ModalMission = require('./modalMission.js');

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
  }

  render() {

    return (

      <div>
         <Navbar color="faded" light expand="md">
           <NavbarBrand href="/"><img src='./assets/logo.png'/></NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>

               <NavItem>
                 <NavLink href='/home'><Button className="buttonNav" outline color="secondary">Accueil</Button></NavLink>
               </NavItem>

               <NavItem>
                 <NavLink><ModalProfil/></NavLink>
               </NavItem>

               <NavItem>
                 <NavLink><ModalMission/></NavLink>
               </NavItem>

               <NavItem>
                 <NavLink href='/freelances'><Button className="buttonNav" outline color="secondary">Trouver un freelance</Button></NavLink>
               </NavItem>

             </Nav>
           </Collapse>
         </Navbar>
       </div>
    )
  }
}

module.exports = NavComponent;

/* DROPDOWN
<UncontrolledDropdown nav inNavbar>
  <DropdownToggle nav caret>
    Structures de l&rsquo;ESS
  </DropdownToggle>
  <DropdownMenu >
    <DropdownItem>
      Proposer une mission
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem href="/freelances">
      Trouver un freelance
    </DropdownItem>
  </DropdownMenu>
</UncontrolledDropdown>
*/

/* TEST IMAGE RESPONSIVE
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
<NavbarBrand href="/">
  <ResponsiveImage>
    <ResponsiveImageSize
      default
      minwidth={0}
      path={'./assets/logo-xs.png'}
    />
    <ResponsiveImageSize
      default
      minwidth={768}
      path={'./assets/logo-m.png'}
    />
    <ResponsiveImageSize
      default
      minwidth={1100}
      path={'./assets/logo-l.png'}
    />
   </ResponsiveImage>
 </NavbarBrand>
*/
