import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Formation from './components/Formation';
import Portfolio from './components/Portfolio';
import Competence from './components/Competence';
import Footer from './components/Footer';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() { 
    return ( 
      <div>
        <Header title="ALI OUAIBI" button="En savoir plus"/>
        <Navigation LogoTitle="Ali Ouaibi" />
        <About/>
        <Formation/>
        <Portfolio/>
        <Competence/>
        <Contact/>
        <Footer title="WEB@CADEMIE"/>
      </div>
    );
  }
}
 
ReactDOM.render(<App/>,document.getElementById('root'));

serviceWorker.unregister();
