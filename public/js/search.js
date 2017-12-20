var React    = require('react');
var ReactDOM = require('react-dom');

import { Button, FormGroup, FormControl } from 'reactstrap';

class SearchBar extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Trouver une mission.."/>
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    );
  };
};

module.exports = SearchBar;
