import React, { Component } from 'react';
import '../style/About.css';
import PDF from './CV_Ali OUAIBI (1).pdf';
import img from '../img/Ali.jpg';

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    
    render() { 
        function printDocument() {
            return {
                mime: 'text/plain',
                filename: 'cv_ali.pdf',
                contents: PDF,
               }
          }
        return ( 
            <div className="about">
                <div className="border" ></div>
                <img src={img} className="photo" alt="logo wac"/>
                <h1>À PROPOS</h1>
                <div className='paragraphe' >
                    <h3>Bonjour</h3>
                    <p>Aujourd'hui, je suis Développeur en formation chez Web@cadémie by Epitech.</p>
                    <p>Passionné par la réalisation et le développement de projets web, je me suis tout
                    naturellement tourné vers la formation chez Epitech pour ensuite démarrer ma carrière en tant
                    que développeur web.</p>
                    <p>À la web@cadèmie by EPITECH depuis novembre 2019, de nombreux projets réalisés tout  
                    aussi bien seul qu’en équipe. J’ai pu acquérir l’autonomie, l’esprit d’initiative, l’esprit d’équipe. J’ai
                    du faire preuve de rigueur, de patience pour mener à bien les projets qui m’ont été confiés en
                    respectant un planning. Fort de ma passion pour ce domaine, je suis très investi dans mon travail
                    et je prends plaisir à l’exercer.</p>
                    <h3>Expériences Proffessionnelles et diplômes</h3>
                    <p>Durant le cours de ma vie, j'ai obtenue le diplômes du baccalauréat S.T.I Génie civil en juillet 2011, ensuite
                        j'ai travailler cher carrefour en tant qu'hôte de caisse de juillet 2011 à Mars 2014. J'ai étais chez class' croûte de Mars 2013 à SEptembre 2015 en tant qu'assistant de responsable
                        et ma dernières expèriences Proffessionnelles avant d'intégrer la formation de chez la web@cademie by epitech à étais a la poste en tant que facteur de Avril 2017 à Septembre 2019.
                    </p>
                    <h3>Hobbies</h3>
                    <p>Je suis quelqu'un qui aime beaucoup le sport comme le football, la salle de fitness, la boxe, le tennis. J'aime voyager à travers les pays du monde, découvrir de nouveaux horizons et 
                        de cultures. Grand fan de jeux vidéo aussi, quand j'ai du temps libre je me l'accorde avec ma playstation4 et c'est partit pour jouer en ligne. ALLEZ AU CINÉMA, AU RESTAURANT, SORTIR EN SOIRÉE AVEC LES AMI(E)S ET LA FAMILLE.
                         J'ai une passion aussi pour la cuisine. </p>
                </div>
            </div>
        );
    }
}
 
export default About;