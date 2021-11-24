import React, {  useState } from 'react';
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'
import './styles.sass';

const Header = () => {
  const [width, setWidth] = useState('0%');
  const toggleMenu = () => (width === '0%') ? setWidth('100%') : setWidth('0%');
  const subTitle = [
    'Junior FullStack Developer with Node.js & React.'
  ];

  return (
    <header>
      <h1>Sebastian Vecchio</h1>
      <h2>
        <Typewriter
          options={{
            cursor: '█',
            strings: subTitle,
            deleteSpeed: 40,
            autoStart: true,
            loop: true,
          }}
         />
      </h2>
      <span className="btn-menu" onClick={() => toggleMenu()}>
        <FontAwesomeIcon icon={ faBars } />
      </span>
      <span className="btn-contact" onClick={() => toggleMenu()}>
        📧 Contact me!
      </span>
      <nav className="overlay" style={{ width }}>
        <span className="btn-close" onClick={() => toggleMenu()}>
          <FontAwesomeIcon icon={ faTimes } className="icon" color="#fff" />
        </span>
        <div className="overlay-content">
          <a href="mailto:sebastianvecchio5@gmail.com" target="_blank" rel="noreferrer">
            Gmail
          </a>
          <a href="https://github.com/totevecchio/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sebastian-vecchio-68787792/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;