import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
var ReactDOM = require('react-dom');

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
