var React = require('react');
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormMissionTest extends React.Component {
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

  handleSubmit(){
    this.Nomdelafonctiondansredux({title:this.state.title, })
    event.preventDefault();
  }

  render() {
        console.log(this.state)
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="titre-mission">Titre de la mission</Label>
          <Input onChange={this.handleChangeTitle} type="textarea" name="text" id="titre-mission" placeholder="Pour quelle mission avez-vous besoin d'un fr'ESS?"  />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input onChange={this.handleChangeMail} type="email" name="email" id="email" placeholder="Votre email.." />
        </FormGroup>

        <FormGroup>
          <Label for="select">Which battle do you fight?</Label>
          <Input onChange={this.handdleChangeSector} type="select" name="select" id="selectSecteur">
            <option>Lutte contre la précarité</option>
            <option>Réfugiés</option>
            <option>Accompagnement du handicap</option>
            <option>Développement durable</option>
            <option>Humanitaire</option>
            <option>Autre</option>
          </Input>
        </FormGroup>


        <FormGroup>
          <Label for="description">Description de l&rsquo;offre</Label>
          <Input onChange={this.handdleChangeDesc} type="textarea" name="text" id="description" />
        </FormGroup>

        <Button>Submit</Button>

      </Form>
      </div>
    )
  }
}

module.exports = FormMissionTest;
