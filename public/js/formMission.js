var React = require('react');
var connect = require ('react-redux').connect;
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormMission extends React.Component {
  constructor() {
    super();
    this.state= {
      title:null,
      email:null,
      sector:null,
      desc:null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handdleChangeSector = this.handdleChangeSector.bind(this);
    this.handdleChangeDesc = this.handdleChangeDesc.bind(this);
  }

  handleChangeTitle(e){
    this.setState({title: e.target.value});
    console.log(e.target.value);
    console.log(this.state.title);
  }
  handleChangeMail(e){
    this.setState({email: e.target.value});
  }
  handdleChangeSector(e){
    this.setState({sector: e.target.value});
  }
  handdleChangeDesc(e){
    this.setState({desc: e.target.value});
  }

  handleSubmit(event){
    console.log(this.state);

    //this.props.submitForm({title:this.state.title, mail:this.state.email, sector:this.state.sector, desc:this.state.desc});
    event.preventDefault();
    console.log(this.state.title);
    var formData = new FormData ();
    formData.append("title", this.state.title);
    formData.append("email", this.state.email);
    formData.append("sector", this.state.sector);
    formData.append("desc", this.state.desc);
    console.log(formData);
    fetch("/add", {
      method: "post",
      body: formData
    })
  }

  render() {
    console.log(this.state)
    return (

    <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label for="titre-mission">Titre de la mission</Label>
        <Input onChange={this.handleChangeTitle} type="textarea" name="text" id="titre-mission" placeholder="Pour quelle mission avez-vous besoin d'un fr'ESS?" />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input onChange={this.handleChangeMail} type="email" name="email" id="email" placeholder="Votre email.." />
      </FormGroup>

      <FormGroup>
        <Label for="select">Which battle do you fight?</Label>
        <Input onChange={this.handleChangeSector} type="select" name="select" id="selectSecteur">
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
        <Input onChange={this.handleChangeDesc} type="textarea" name="text" id="description" />
      </FormGroup>

      <Button>Submit</Button>

    </Form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitForm: function(data) {
        dispatch( {type: 'submitForm'}, title:data.title, email:data.email, sector:data.sector, desc:data.desc)
    }
  }
}

var FormMissionRedux = connect(
    null,
    mapDispatchToProps
)(FormMission);

module.exports = FormMissionRedux;
