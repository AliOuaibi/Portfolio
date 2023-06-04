import React, {Component} from 'react';
import '../style/Navigation.css';

function Navigation(props) {
  const sections = ['Accueil', 'Formation', 'Portfolio', 'Contact'];
  const navLinks = sections.map((section, i) => {
    return (
      <li key={`item-nav-links-${i}`}><a href={`#${section}`}>{section}</a></li>
    )
  })

  return (
    <nav id="Accueil">
      <h2 className="title">{props.LogoTitle}</h2>
      <ul>
        {navLinks}
      </ul>
    </nav>
  );
}

export default Navigation;