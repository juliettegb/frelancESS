var React    = require('react');
var ReactDOM = require('react-dom');

var NavComponent = require('./navcomponent.js');
var SearchBar = require('./search.js');
var MissionCard = require('./missionCard.js');

class Home extends React.Component {

  constructor() {
   super();
  }

  render() {
    return (

    <div>

    <NavComponent/>

    <div className="opacityVid">
    <section className="backgroundVideo">
      <video poster="../assets/home.mp4" id="bgvid" playsInline autoPlay muted loop>
        <source src="../assets/home.webm" type="video/webm"/>
        <source src="../assets/home.mp4" type="video/mp4"/>
      </video>
    </section>

    <div className="text-center landing">
      <div className="catchphrase">
        Des missions inspirantes, des freelances passionnés.
      </div>
      <SearchBar/>
    </div>
    </div>
    <MissionCard/>

    </div>

    );
  }
}

module.exports = Home;
