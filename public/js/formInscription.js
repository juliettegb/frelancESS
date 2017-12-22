var React = require('react');
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// class SimpleForm extends React.Component { const SimpleForm =
// function(props){ }

const FormInscription = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <Form onSubmit={handleSubmit}>

      <FormGroup>
        <Label for="text">Prénom</Label>
        <Input type="textarea" name="text" id="prenom" />
      </FormGroup>

      <FormGroup>
        <Label for="text">Nom</Label>
        <Input type="textarea" name="text" id="nom" />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Votre Email.." />
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Quel est votre niveau d&rsquo;expérience?</legend>
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
      </FormGroup>

      <FormGroup>
        <Label for="selectMulti">Quelles sont vos compétences?</Label>
        <Input type="select" name="selectMulti" id="selectMulti" multiple>
          <option>Design graphique</option>
          <option>Communication digitale</option>
          <option>Développement web</option>
          <option>Blabla</option>
          <option>Blabla</option>
        </Input>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Quelles sont vos dispos?</legend>
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
        <Label for="description">Un commentaire?</Label>
        <Input type="textarea" name="text" id="description" />
      </FormGroup>

      <FormGroup>
        <Label for="file">Votre photo</Label>
        <Input type="file" name="file" id="photo" />
        <FormText color="muted">
          Votre photo figurera sur votre profil et sera visible par la communauté.
        </FormText>
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  )
}

module.exports = FormInscription;
