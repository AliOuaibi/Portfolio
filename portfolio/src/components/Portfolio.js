import React, { Component } from 'react';
import '../style/Portfolio.css';
import Puissance from '../img/portfolio/ps4.png'
import Snap from '../img/portfolio/snap.png'
import Cine from '../img/portfolio/cine.png'
import Tweet from '../img/portfolio/twit.png'
import Blog from '../img/portfolio/blog.png'
import Meetic from '../img/portfolio/meetic.png';
import PuissanceModal from './PuissanceModal';
import TweetModal from './TweetModal';
import BlogModal from './BlogModal';
import SnapModal from './SnapModal';
import CineModal from './CineModal';
import MeeticModal from './MeeticModal';

const puissance = {
    borderRadius: '10px',
    width: '90%',
    cursor: 'pointer'
}
const snap = {
    borderRadius: '10px',
    width: '92%',
    cursor: 'pointer'
}
const cine = {
    borderRadius: '10px',
    width: '82%',
    marginLeft:'7%',
    cursor: 'pointer'
}
const tweet = {
    borderRadius: '10px',
    width: '92%',
    cursor: 'pointer'
}
const meetic = {
    width: '100%',
    marginLeft:'7%',
    borderRadius: '10px',
    cursor: 'pointer'
}
const blog = {
    width: '71%',
    marginLeft:'20%',
    borderRadius: '10px',
    cursor: 'pointer'
}

class Portfolio extends Component {
    constructor() { 
        super(); 

        this.state = { 
            showPopup: false,
            showPopup2: false,
            showPopup3: false,
            showPopup4: false,
            showPopup5: false,
            showPopup6: false,
         }; 
        } 

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup,
            showPopup2: false,
            showPopup3: false,
            showPopup4: false,
            showPopup5: false,
            showPopup6: false,
        });
    }  

    togglePopup2() {
        this.setState({
            showPopup2: !this.state.showPopup2,
            showPopup: false,
            showPopup3: false,
            showPopup4: false,
            showPopup5: false,
            showPopup6: false,
        });
    } 

    togglePopup3() {
        this.setState({
            showPopup3: !this.state.showPopup3,
            showPopup2: false,
            showPopup: false,
            showPopup4: false,
            showPopup5: false,
            showPopup6: false,
        });
    }  

    togglePopup4() {
        this.setState({
            showPopup4: !this.state.showPopup4,
            showPopup2: false,
            showPopup3: false,
            showPopup: false,
            showPopup5: false,
            showPopup6: false,
        });
    }   

    togglePopup5() {
        this.setState({
            showPopup5: !this.state.showPopup5,
            showPopup2: false,
            showPopup3: false,
            showPopup4: false,
            showPopup: false,
            showPopup6: false,
        });
    }    

    togglePopup6() {
        this.setState({
            showPopup6: !this.state.showPopup6,
            showPopup2: false,
            showPopup3: false,
            showPopup4: false,
            showPopup5: false,
            showPopup: false,
        });
    }               
         
    render() { 
        
        return ( 
            <div className="Portfolio">
                <div className="border" ></div>
                <h2>PORTFOLIO</h2>
                <h3>Voici des projets réalisés au cours de ma première année</h3>

                <div className="portfolio">
                    <div className="projet">
                        <h3>My_puissance4</h3>
                        <img style={puissance} src={Puissance} onClick={this.togglePopup.bind(this)}/>
                        {this.state.showPopup ? 
                        <PuissanceModal
                            text='Description'
                        />
                        : null
                        }    
                    </div>

                    <div className="projet2">
                        <h3>My_Snapchat</h3>
                        <img style={snap} src={Snap} onClick={this.togglePopup2.bind(this)}/>
                        {this.state.showPopup2 ?
                        <SnapModal
                            text='Description'
                        />
                        : null
                        }
                    </div>

                    <div className="projet3">
                        <h3>My_cinema</h3>
                        <img style={cine} src={Cine} onClick={this.togglePopup3.bind(this)}/>
                        {this.state.showPopup3 ? 
                        <CineModal
                            text='Description'
                        />
                        : null
                        }     
                    </div>
                </div>
                <div className="portfolio">
                    <div className="projet4">
                        <h3>Tweet_academie</h3>
                        <img style={tweet} src={Tweet} onClick={this.togglePopup4.bind(this)}/>
                        {this.state.showPopup4 ? 
                        <TweetModal
                            text='Description'
                        />
                        : null
                        }                        
                    </div>
                    <div className="projet5">
                        <h3>My_Meetic</h3>
                        <img style={meetic} src={Meetic} onClick={this.togglePopup5.bind(this)}/>
                        {this.state.showPopup5 ? 
                        <MeeticModal
                            text='Description'
                            closePopup={this.togglePopup6.bind(this)}
                        />
                        : null
                        }   
                    </div>
                    <div className="projet6">
                        <h3>My_blog</h3>
                        <img style={blog} src={Blog} onClick={this.togglePopup6.bind(this)}/>
                        {this.state.showPopup6 ? 
                        <BlogModal
                            text='Description'
                            closePopup={this.togglePopup5.bind(this)}
                        />
                        : null
                        }     
                    </div>
                </div>
            </div>
        );
    }
}

  
export default Portfolio;