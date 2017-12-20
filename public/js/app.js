var React    = require('react');
var ReactDOM = require('react-dom');
var Router   = require('react-router-dom').BrowserRouter;
var Route    = require('react-router-dom').Route;
var Provider    =  require('react-redux').Provider;
var Field = require('redux-form').Field;
var ReduxForm = require('redux-form').ReduxForm;
var createStore =  require('redux').createStore;
var formReducer = require('redux-form').reducer;
var connect         = require('react-redux').connect;
var combineReducers =  require('redux').combineReducers;
var FormInscriptionRedux  = require('./formInscription');
var FormMissionRedux  = require('./formMission');

var Home         = require('./home');
var FicheMission = require('./ficheMission');
var FreelanceGrid  = require('./freelances');

class AppHome extends React.Component {
  constructor() {
    super();
  }

  submit(values){
   console.log(values)
  }
  submit2(values){
   console.log(values)
  }

  render() {
    return (
      <div>
        <FormInscriptionRedux onSubmit={this.submit}/>
        <FormMissionRedux onSubmit={this.submit2}/>
        <Home/>
        <FicheMission/>
        <FreelanceGrid/>
        <Modal/>
      </div>
    )
  }
}

  const reducers = {
    // ... your other reducers here ...
    form: formReducer     // <---- Mounted at 'form'
  }
  const reducer = combineReducers(reducers)
  const store = createStore(reducer)

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
