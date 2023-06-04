import React, {Component} from 'react';
import '../style/Modal.css';

function MeeticModal(props) {
  return (
    <div className={'my-dropdown-slidedown'}>
      <div className='popupMeetic'>
        <div className='popup_inner'>
          <h1>{props.text}</h1>
          <p>Projet création d'un site de rencontre (my_meetic) en POO PHP (2 semaines)</p>
          <p>- Mise en place basique d'une structure de projet MVC et sécurisations basiques</p>
          <p>- Création et gestion d'une connexion/inscription</p>
          <p>- Visualisation et modification du profil</p>
          <p>- Recherche de profil</p>
        </div>
      </div>
    </div>
  );
}

export default MeeticModal;