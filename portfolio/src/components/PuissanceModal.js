import React, { Component } from 'react';
import '../style/Modal.css';
import video1 from './video/puissance4.webm';
import {SlideDown} from 'react-slidedown'
import { AiFillGithub} from "react-icons/ai";
import 'react-slidedown/lib/slidedown.css'

class PuissanceModal extends Component {
    render() { 
        return ( 
          <SlideDown className={'my-dropdown-slidedown'}>
            <div className='popupPuissance'>
            <div className='popup_inner'>
              <h1>{this.props.text}</h1>
              <p>Projet création d'un Puissance4 en JQUERY (1 semaines)</p>
              <p>- Création de la grille et des pions</p>
              <p>- Gestion de victoire en horizontale, diagonale et verticale</p>
              <p>- Affichage du score et du joueur courant</p>
              <p><a href="https://github.com/AliOuaibi/Puissance4"><AiFillGithub size="2rem" color="#0061d7"/></a>AliOuaibi/Puissance4</p>
              <video src={video1} width="550" height="300" controls="controls" autoplay="true" />
            </div>
            </div>
          </SlideDown> 
        );
    }
}

export default PuissanceModal;