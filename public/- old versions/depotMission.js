var React = require('react');
var Field = require('redux-form').Field;

// class SimpleForm extends React.Component { const SimpleForm =
// function(props){ }

const DepoForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre</label>
        <div>
          <Field name="Titre" component="input" type="textarea" placeholder="Titre"/>
        </div>
      </div>
      <div>
        <label>Contact</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Secteur</label>{' '}
          <label>
            <Field name="secteur" component="input" type="radio" value="Web development"/>{' '}
            Web development
          </label>{' '}
          <label>
            <Field name="experience" component="input" type="radio" value="Secours"/>{' '}
            Secours
          </label>{' '}
          <label>
          <Field name="experience" component="input" type="radio" value="Humanitaire"/>{' '}
          Humanitaire
        </label>{' '}
      </div>
      <div>
        <label htmlFor="competence">Competence</label>
        <div>
          competence<Field name="competence" id="employed" component="input" type="checkbox"/> {' '}
          competence 1<Field name="competence1" id="employed" component="input" type="checkbox"/> {' '}
          competence 2<Field name="competence2" id="employed" component="input" type="checkbox"/> {' '}
          competence 3<Field name="competence3" id="employed" component="input" type="checkbox"/> {' '}
        </div>{' '}
      </div>
      <div>
      <label>experience</label>{' '}
        <label>
          <Field name="disponible" component="input" type="radio" value="part-time"/>{' '}
          part-time
        </label>{' '}
        <label>
          <Field name="disponible" component="input" type="radio" value="full time"/>{' '}
          full-time
        </label>{' '}
    </div>
      <div>
        <label>Description offre</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>

    </form>
  )
}

var reduxForm = require('redux-form').reduxForm;

var DepoFormRedux = reduxForm({form: 'newsimple'})(DepoForm)

module.exports = DepoFormRedux;
