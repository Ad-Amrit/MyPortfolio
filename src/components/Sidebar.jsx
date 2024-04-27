import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src="../assets/images/logo.png" alt="Logo" />
      </div>

      <ul className='links'>

        <li className='github'>
          <a href="https://github.com/Ad-Amrit" target="_blank">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </li>

        <li className='linkedin'>
          <a href="https://www.linkedin.com/in/amrit-adhikari-45a538277/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </li>

        <li className='email'>
          <a href="mailto:amritadhikari.dev@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
        </li>

      </ul>

    </div>
  )
}

export default Sidebar;
