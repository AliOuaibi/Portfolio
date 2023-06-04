import React, {Component} from 'react';
import '../style/Modal.css';
import video1 from './video/cine.webm';
import {AiFillGithub} from "react-icons/ai";

class CineModal extends Component {
  render() {
    return (
      <div className={'my-dropdown-slidedown'}>
        <div className='popupCine'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <p>Projet création d'un site (my_cinema) en PHP (2 semaines)</p>
            <p>- Connexion à la BDD</p>
            <p>- Recherche complexe des films (nom ET/OU genre ET/OU distrib)</p>
            <p>- CRUD abonnement, CREATE READ historique client et avis film</p>
            <p><a href="https://github.com/AliOuaibi/my_cinema"><AiFillGithub size="2rem" color="#0061d7"/></a>AliOuaibi/my_cinema
            </p>
            <video src={video1} controls="controls" autoplay="true"/>
          </div>
        </div>
      </div>
    );
  }
}

export default CineModal;