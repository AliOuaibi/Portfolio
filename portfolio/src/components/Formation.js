import React, { Component } from 'react';
import '../style/Formation.css';
import img from '../img/wac.png';
import { FcMultipleDevices,FcComboChart, FcBriefcase } from "react-icons/fc";


class Formation extends Component {
    render() { 
        return ( 
            <div className="formation" id="Formation">
                <div className="border" ></div>
                <img src={img} className="logo" alt="logo wac"/>
                <h2>LA FORMATION - WEB@CADEMIE BY EPITECH</h2>
                <h3>Titre d’Intégrateur – Développeur Web au niveau III (fr) et 5 (eu)</h3>

                <div className="detail">
                    <div className="description">
                        <FcMultipleDevices size="6rem" className="icon"/>
                        <h3>Naviguez dans les technologies du web</h3>
                        <p>Au cours de la première année, on apprend l'intégration HTML/CSS, initiation aux fondamentaux PHP et Javascript. Utilisation des frameworks, librairies et Wordpress.</p>
                        <p>Deuxième année, découverte du stack JAVA/ANGULAR, Python, Ruby, API & micro-services</p>
                    </div>
                    <div className="description">
                        <FcComboChart size="6rem" className="icon"/>
                        <h3>Méthode de fonctionnement</h3>
                        <p>C’est une période intense où la solidarité, le courage et l’excellence, valeurs d’Epitech, m'accompagneront. Travailler seul ou en équipe, sur des projets concrets.
                        C’est la méthode inductive: par la pratique, assimiler la théorie. Ce prisme de nouvelles connaissances va m'ouvrir toutes les perspectives d’avenir et de métiers.</p>
                    </div>
                    <div className="description">
                        <FcBriefcase size="6rem" className="icon"/>
                        <h3>La période d'alternance</h3>
                        <p>Elle se déroule en deuxième année, sur un rythme de 3 semaines en entreprise et une semaine au campus Universitaire. Pour le contrat c'est un contrat de professionnalisation ou un contrat apprentissage.</p>
                <p id="Portfolio"></p>
                    </div>
                </div>
            </div >
        );
    }
}
 
export default Formation;