var React    = require('react');
var ReactDOM = require('react-dom');
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
var Modal = require('react-bootstrap-modal')

class Inscription2 extends React.Component {
  render(){
    return (

    <div className="container">
      <h2>Modal Example</h2>
      <Button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</Button>

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <Button type="button" className="close" data-dismiss="modal">&times;</Button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div className="modal-footer">
              <Button type="button" className="btn btn-default" data-dismiss="modal">Close</Button>
            </div>
          </div>

        </div>
      </div>

    </div>

    )
  }
}

module.exports = Inscription2;
