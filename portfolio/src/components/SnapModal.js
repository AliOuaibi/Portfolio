import React, {Component} from 'react';
import '../style/Modal.css';
import {AiFillGithub} from "react-icons/ai";

function SnapModal(props) {
  return (
    <div className={'my-dropdown-slidedown'}>
      <div className='popupSnap'>
        <div className='popup_inner'>
          <h1>{props.text}</h1>
          <p>Projet création d'une application (my_snapchat) avec ReactNative (1 semaines)</p>
          <p>- Créer et gérer une connexion/inscription</p>
          <p>- L'utilisateur peut prendre/sélectionner une photo</p>
          <p>- L'utilisateur peut envoyer un snap à un autre utilisateur et il peut recevoir un snap </p>
          <p color="#0061d7"><a href="https://github.com/AliOuaibi/my_snapchat"><AiFillGithub size="2rem"
                                                                                              color="#0061d7"/></a>AliOuaibi/my_snapchat
          </p>
        </div>
      </div>
    </div>
  );
}

export default SnapModal;