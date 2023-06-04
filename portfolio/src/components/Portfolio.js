import React, {Component, useState} from 'react';
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
  marginLeft: '7%',
  cursor: 'pointer'
}
const tweet = {
  borderRadius: '10px',
  width: '92%',
  cursor: 'pointer'
}
const meetic = {
  width: '100%',
  marginLeft: '7%',
  borderRadius: '10px',
  cursor: 'pointer'
}
const blog = {
  width: '71%',
  marginLeft: '20%',
  borderRadius: '10px',
  cursor: 'pointer'
}

function Portfolio() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);
  const [showPopup5, setShowPopup5] = useState(false);
  const [showPopup6, setShowPopup6] = useState(false);

  const togglePopup = (popupState, setPopupState) => {
    setPopupState(!popupState);
  }

  return (
    <div className="Portfolio">
      <div className="border"></div>
      <h2>PORTFOLIO</h2>
      <h3>Voici des projets réalisés au cours de ma première année</h3>

      <div className="portfolio">
        <div className="projet">
          <h3>My_puissance4</h3>
          <img style={puissance} src={Puissance} onClick={() => togglePopup(showPopup, setShowPopup)}/>
          {showPopup ?
            <PuissanceModal
              text='Description'
            />
            : null
          }
        </div>

        <div className="projet2">
          <h3>My_Snapchat</h3>
          <img style={snap} src={Snap} onClick={() => togglePopup(showPopup2, setShowPopup2)}/>
          {showPopup2 ?
            <SnapModal
              text='Description'
            />
            : null
          }
        </div>

        <div className="projet3">
          <h3>My_cinema</h3>
          <img style={cine} src={Cine} onClick={() => togglePopup(showPopup3, setShowPopup3)}/>
          {showPopup3 ?
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
          <img style={tweet} src={Tweet} onClick={() => togglePopup(showPopup4, setShowPopup4)}/>
          {showPopup4 ?
            <TweetModal
              text='Description'
            />
            : null
          }
        </div>
        <div className="projet5">
          <h3>My_Meetic</h3>
          <img style={meetic} src={Meetic} onClick={() => togglePopup(showPopup5, setShowPopup5)}/>
          {showPopup5 ?
            <MeeticModal
              text='Description'
              closePopup={() => togglePopup(showPopup6, setShowPopup6)}
            />
            : null
          }
        </div>
        <div className="projet6">
          <h3>My_blog</h3>
          <img style={blog} src={Blog} onClick={() => togglePopup(showPopup6, setShowPopup6)}/>
          {showPopup6 ?
            <BlogModal
              text='Description'
              closePopup={() => togglePopup(showPopup5, setShowPopup5)}
            />
            : null
          }
        </div>
      </div>
    </div>
  );
}


export default Portfolio;