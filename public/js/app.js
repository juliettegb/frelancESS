var React    = require('react');
var ReactDOM = require('react-dom');
var Router   = require('react-router-dom').BrowserRouter;
var Route    = require('react-router-dom').Route;
var Provider    =  require('react-redux').Provider;
var createStore =  require('redux').createStore;
var connect         = require('react-redux').connect;
var FormInscription  = require('./formInscription');
var FormMissionRedux  = require('./formMission');

var Home         = require('./home');
var FicheMission = require('./ficheMission');
var FreelanceGrid  = require('./freelances');

function globalReducer(state, action) {
  if(action.type == 'submitForm') {
      return { title: state.title, mail: state.email, sector: state.sector, desc: state.desc }
  }
}

const store = createStore(globalReducer, {title:'', mail:'', sector:'', desc:''});
window.store=store;

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        'Ok'
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/mission" component={FicheMission}/>
      <Route exact path="/freelances" component={FreelanceGrid}/>
    </div>
  </Router>
  </Provider>
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
