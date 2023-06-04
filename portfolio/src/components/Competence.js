import React, {Component} from 'react';
import '../style/Competence.css';
import JS from '../img/techno/js.png';
import REACT from '../img/techno/react.png';
import PHP from '../img/techno/php.png';
import Mongo from '../img/techno/mongodb.png';
import Symfony from '../img/techno/symfony.png';
import Laravel from '../img/techno/laravel.png';


function Competence() {
  return (
    <div className="competence">
      <div className="border"></div>
      <h1>Compétence</h1>
      <div className='logoCompe'>
        <div className="js"><img style={js} src={JS}/></div>
        <div className="react"><img style={rc} src={REACT}/></div>
        <div className="mongo"><img style={mongo} src={Mongo}/></div>
      </div>
      <div className='logoCompe'>
        <div className="php"><img style={php} src={PHP}/></div>
        <div className="symfony"><img style={symfony} src={Symfony}/></div>
        <div className="laravel"><img style={laravel} src={Laravel}/></div>
        <p id="Contact"></p>
      </div>
    </div>
  );
}

const js = {
  width: '60%',
}

const rc = {
  width: '65%',
}

const mongo = {
  width: '40%',
}

const php = {
  width: '35%',
}

const symfony = {
  width: '30%',
}

const laravel = {
  width: '30%'
}

export default Competence;