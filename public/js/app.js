var React    = require('react');
var ReactDOM = require('react-dom');
var Router   = require('react-router-dom').BrowserRouter;
var Route    = require('react-router-dom').Route;

var Home         = require('./home');
var FicheMission = require('./ficheMission');
var Inscription  = require('./inscription');
var FreelanceGrid  = require('./freelances');

class AppHome extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Home/>
        <FicheMission/>
        <FreelanceGrid/>
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/inscription" component={Inscription}/>
      <Route exact path="/mission" component={FicheMission}/>
      <Route exact path="/freelances" component={FreelanceGrid}/>
    </div>
  </Router>
  ,
  document.getElementById('container')
);

/*    <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/inscription" component={Inscription}/>
      <Route exact path="/offre" component={DepotMission}/>
      <Route exact path="/mission" component={FicheMission}/>
      <Route exact path="/missions" component={MissionGrid}/>
      <Route exact path="/freelances" component={FreelanceGrid}/>    */
