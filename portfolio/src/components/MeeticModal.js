import React, { Component } from 'react';
import '../style/Modal.css';
import video1 from './video/tweet.webm';
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

class MeeticModal extends Component {
    render() { 
        return (  
          <SlideDown className={'my-dropdown-slidedown'}>
            <div className='popupMeetic'>
            <div className='popup_inner'>
              <h1>{this.props.text}</h1>
              <p>Projet création d'un site de rencontre (my_meetic) en POO PHP (2 semaines)</p>
              <p>- Mise en place basique d'une structure de projet MVC et sécurisations basiques</p>
              <p>- Création et gestion d'une connexion/inscription</p>
              <p>- Visualisation et modification du profil</p>
              <p>- Recherche de profil</p>
              {/* <video src={video1} controls="controls" autoplay="true" /> */}
            </div>
            </div>
          </SlideDown>
        );
    }
}

export default MeeticModal;