var React = require('react');
var Field = require('redux-form').Field;

// class SimpleForm extends React.Component { const SimpleForm =
// function(props){ }

const SimpleForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="Prénom"/>
        </div>
      </div>
      <div>
        <label>Nom</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Nom"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div>
        <label>Expérience</label>{' '}
          <label>
            <Field name="experience" component="input" type="radio" value="0-3 ans"/>{' '}
            0-3 ans
          </label>{' '}
          <label>
            <Field name="experience" component="input" type="radio" value="4-9 ans"/>{' '}
            4-9 ans
          </label>{' '}
          <label>
          <Field name="experience" component="input" type="radio" value="+ 10 ans"/>{' '}
            Plus de 10 ans
        </label>{' '}
      </div>
      <div>
        <label htmlFor="employed">Compétences</label>
        <div>
          Communication<Field name="employed" id="employed" component="input" type="checkbox"/> {' '}
          Développement web<Field name="employed1" id="employed" component="input" type="checkbox"/> {' '}
          Design<Field name="employed2" id="employed" component="input" type="checkbox"/> {' '}
          Consultant en innovation<Field name="employed3" id="employed" component="input" type="checkbox"/> {' '}
        </div>{' '}
      </div>
      <div>
      <label>Disponiblités</label>{' '}
        <label>
          <Field name="disponible" component="input" type="radio" value="part-time"/>{' '}
          Part-time
        </label>{' '}
        <label>
          <Field name="disponible" component="input" type="radio" value="full time"/>{' '}
          Full-time
        </label>{' '}
    </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <button type="submit">
          Valider
        </button>
      </div>

    </form>
  )
}

var reduxForm = require('redux-form').reduxForm;
var SimpleFormRedux = reduxForm({form: 'simple'})(SimpleForm)

module.exports = SimpleFormRedux;
