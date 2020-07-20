import React, { Component } from 'react';
import '../style/Navigation.css';

class Navigation extends Component {
    render() { 
        const sections = ['Acceuil','Formation','Portfolio','Contact'];
        const navLinks = sections.map(section => {
            return(
                <li><a href={`#${section}`}>{section}</a></li>
            )
        })
        return (
            <nav id="Acceuil">
               <h2 className="title">{this.props.LogoTitle}</h2>
            
                <ul>
                    {navLinks}
                </ul>
            </nav>
        );
    }
}
 
export default Navigation;