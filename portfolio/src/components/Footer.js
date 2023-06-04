import React, {Component} from 'react';
import Background from '../img/footer.jpg';
import '../style/Footer.css';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const myStyle = {
  'backgroundImage': `url( ${Background})`,
  height: '40vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

function Footer(props) {
  return (
    <header style={myStyle} className="footer">
      <h1>{props.title}</h1>
      <p></p>
      <a href="https://github.com/AliOuaibi"><AiFillGithub size="3rem" color='#fff'/></a>
      <a href="https://www.linkedin.com/in/ali-ouaibi/"><AiFillLinkedin size="3rem" color='#fff'/></a>
      <p className='foot'></p>
      <div className="copyright">
        &copy; Copyright <strong><span>Ali</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <strong><span>Ouaibi Ali</span></strong>
      </div>
    </header>
  );
}

export default Footer;