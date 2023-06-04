import React, {Component} from 'react';
import '../style/Modal.css';
import video1 from './video/blog.webm';
import {AiFillGithub} from "react-icons/ai";

function BlogModal(props) {
  return (
    <div className={'my-dropdown-slidedown'}>
      <div className='popupBlog'>
        <div className='popup_inner'>
          <h1>{props.text}</h1>
          <p>Projet création d'un blog de billet avec NodeJS/React (2 jours)</p>
          <p>- Gestion du back avec MongoDB et Mongoose</p>
          <p>- Gestion du front avec React et récupération des données de la base de donnée</p>
          <p>- Affichage, création, modification et suppression d'un billet</p>
          <p><a href="https://github.com/AliOuaibi/my_blog"><AiFillGithub size="2rem" color="#0061d7"/></a>AliOuaibi/my_blog
          </p>
          <video src={video1} controls="controls"/>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;