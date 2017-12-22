var React = require('react');
var ReactDOM  = require('react-dom');
var Provider    =  require('react-redux').Provider;
var Router = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Field = require('redux-form').Field;
var ReduxForm = require('redux-form').ReduxForm;
var HomeRedux  = require('./inscription');
var createStore =  require('redux').createStore;
var formReducer = require('redux-form').reducer;
var connect         = require('react-redux').connect;
var combineReducers =  require('redux').combineReducers;
var DepoRedux  = require('./depo');


class App extends React.Component {

    constructor() {
        super();
    }
    submit(values){
     console.log(values)
     var competence = true;
     var competence1 = true;
     var competence2 =true;
     var competence3 = true;

     if (values.competence == undefined){
       competence = false;
       console.log(competence)
     }
     if (values.competence1 == undefined){
       competence1 = false;
       console.log(competence1)
     }
     if (values.competence2 == undefined){
       competence2 = false;
       console.log(competence2)
     }
     if (values.competence3 == undefined){
       competence3 = false;
       console.log(competence3)
     }

     var formData = new FormData ();
     formData.append("firstName", values.firstName);
     formData.append("lastName", values.lastName);
     formData.append("email", values.email);
     formData.append("experience", values.experience);
     formData.append("competence", competence);
     formData.append("competence1", competence1);
     formData.append("competence2", competence2);
     formData.append("competence3", competence3);
     formData.append("notes", values.notes);
     console.log(formData);
     fetch("/add", {
       method: "post",
       body: formData
     })
   }

    submit2(values){
     console.log(values)
               }
    render() {
        return (
            <div>
                <div>
                <HomeRedux onSubmit={this.submit}/>
                </div>
                <div>
                <DepoRedux onSubmit={this.submit2}/>
                </div>

            </div>

        );
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
    <App/>
    </Provider>

    , document.getElementById('content'));




   /* {
        console.log(values.firstName)

        var form = new FormData();
        form.append('firstName', value.firstName)

        fetch("/login", {
           method: "POST",
           body: form
           }).then(function(response) {
               return response.json();
           })
           .then(function(data) {
               console.log(data);
           });

           } */
