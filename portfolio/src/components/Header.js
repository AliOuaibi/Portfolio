import React, { Component } from 'react';
import Background from '../img/fond.gif';
import img from '../img/WAC.png';
import '../style/Header.css';

const myStyle = {
    'backgroundImage' : `url( ${Background})`,
    height: '68vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

class Header extends Component {
    render() { 
        return ( 
            <header style={myStyle} className="header">
                <img src={img} className="Logo" alt="logo wac"/>
                <p> </p>
                <h1>{this.props.title}</h1>
                <p>Bienvenue dans mon portfolio </p>
                <a href="#Acceuil">{this.props.button}</a>
            </header>
        );
    }
}
 
export default Header;