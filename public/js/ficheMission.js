var React    = require('react');
var ReactDOM = require('react-dom');

var NavComponent = require('./navcomponent.js');

class FicheMission extends React.Component {

  constructor() {
   super();
  }

  render() {
    return (

    <div className="fiche">

    <NavComponent/>


    </div>

    );
  }
}

module.exports = FicheMission;
