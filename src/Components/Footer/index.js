import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.sass';

const Footer = () => (
  <div className="footer">
    <div className="wrapper">
      <p className="left">
        Made by
        <a href="https://www.linkedin.com/in/sebastian-vecchio-68787792/"
           target="_blank"
           rel="noreferrer"
        >
          Sebastian Vecchio
        </a>
      </p>
      <p className="right">
        <a href="https://github.com/totevecchio/sebastianvecchio"
           target="_blank"
           rel="noreferrer"
        >
          View the source code <FontAwesomeIcon icon="code" />
        </a>
      </p>
    </div>
  </div>
)

export default Footer;