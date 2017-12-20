var React = require('react');
var Field = require('redux-form').Field;
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// class SimpleForm extends React.Component { const SimpleForm =
// function(props){ }

const FormMission = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (

    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="titre-mission">Titre de la mission</Label>
        <Input type="textarea" name="text" id="titre-mission" placeholder="Pour quelle mission avez-vous besoin d'un fr'ESS?" />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Votre email.." />
      </FormGroup>

      <FormGroup>
        <Label for="select">Which battle do you fight?</Label>
        <Input type="select" name="select" id="selectSecteur">
          <option>Lutte contre la précarité</option>
          <option>Réfugiés</option>
          <option>Accompagnement du handicap</option>
          <option>Développement durable</option>
          <option>Humanitaire</option>
          <option>Autre</option>
        </Input>
      </FormGroup>

      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Design graphique
        </Label>
        <Label check>
          <Input type="checkbox" />{' '}
          Communication digitale
        </Label>
        <Label check>
          <Input type="checkbox" />{' '}
          Développement web
        </Label>
        <Label check>
          <Input type="checkbox" />{' '}
          Blabla
        </Label>
        <Label check>
          <Input type="checkbox" />{' '}
          Blabla
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="selectMulti">Quelles compétences recherchez-vous?</Label>
        <Input type="select" name="selectMulti" id="selectMulti" multiple>
          <option>Design graphique</option>
          <option>Communication digitale</option>
          <option>Développement web</option>
          <option>Blabla</option>
          <option>Blabla</option>
        </Input>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Quel niveau d&rsquo;expérience recherchez-vous?</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            0-3 ans
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            4-9 ans
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Plus de 10 ans
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Doesn&rsquo;t care!
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Niveau de besoins</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Part-time
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Full-time
          </Label>
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <Label for="description">Description de l&rsquo;offre</Label>
        <Input type="textarea" name="text" id="description" />
      </FormGroup>

      <Button>Submit</Button>

    </Form>
  )
}

var reduxForm = require('redux-form').reduxForm;
var FormMissionRedux = reduxForm({form: 'newsimple'})(FormMission)

module.exports = FormMissionRedux;
