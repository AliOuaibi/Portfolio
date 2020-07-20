import React, { Component } from 'react';
import '../style/Modal.css';
import video1 from './video/tweet.webm';
import {SlideDown} from 'react-slidedown'
import { AiFillGithub} from "react-icons/ai";
import 'react-slidedown/lib/slidedown.css'


class TweetModal extends Component {
    render() { 
        return (  
          <SlideDown className={'my-dropdown-slidedown'}>
            <div className='popupTweet'>
            <div className='popup_inner'>
              <h1>{this.props.text}</h1>
              <p>Projet création d'un twitter en PHP (1 semaines)</p>
              <p>- Création d'un espace membre (Inscription)</p>
              <p>- Permettre à l'utilisateur de se connecter une fois le membre inscrit (Connexion)</p>
              <p>- Suivre un membre, afficher les followers et les following</p>
              <p>- Poster un tweet, permette l'ajout d'un hashtag (#) et ne doivent pas dépasser les 140caractères, une fois ajouter le tweet s'affiche sans actualiser la page</p>
              <p>- Edition de profil (changer son email, mot de passe, pseudo et ça photo de profil)</p>
              <p>- Système de recherche d'un tweet, pouvoir identifier une personne à l'aide d'un @</p>
              <p><a href="https://github.com/AliOuaibi/Tweet_academie"><AiFillGithub size="2rem" color="#0061d7"/></a>AliOuaibi/Tweet_academie</p>
              <video src={video1} controls="controls" autoplay="true" />
            </div>
            </div>
          </SlideDown>
        );
    }
}

export default TweetModal;