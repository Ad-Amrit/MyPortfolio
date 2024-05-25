import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/Home.css'
import Profile from '../assets/images/profile.png'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Main'>
      <div className='TextSection'>
        <h1>Hey There,</h1>
        <p>IT'S ME AMRIT ADHIKARI</p>
        <p>I'm a</p>
        <Typewriter
          options={{
          strings: ['Software Engineer', 'Web Developer', 'React Developer'],
          autoStart: true,
          loop: true,
          }}
        />
        <p className='About'>As a recent graduate in software engineering, I'm brimming with
           passion for web development and a thirst for knowledge. While I'm 
           new to the professional world, I've been actively honing my
           skills in HTML, CSS, and JavaScript. I'm particularly interested
           in front-end development and creating user-friendly
           interfaces.</p>
        <ul className='links'>
        <li>
          <a href="https://github.com/Ad-Amrit" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/amrit-adhikari-45a538277/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li>
          <a href="mailto:amritadhikari.dev@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
   
      </div>
      <div className='ImageSection'>
        <img src={Profile} alt="Image" />
      </div>
      </div>

      
      <div className='Top'>

      <div className='Skills'>
        <h1>Languages</h1>
        <div className='SkillsGrid'>
          <section className='Javascript'>
             <img src="../src/assets/images/javascript.png" alt="Javascript" />
             <p>JAVASCRIPT</p>
          </section>
        </div>
      </div>

      <div className='Skills'>
        <h1>Front-end Tools</h1>
        <div className='SkillsGrid'>
          <section className='React'>
            <img src="../src/assets/images/reactjs.png" alt="React" />
            <p>React Js</p>
          </section>
          <section className='Bootstrap'>
            <img src="../src/assets/images/bootstrap.png" alt="Bootstrap" />
            <p>Bootstrap</p>
          </section>
        </div>
      </div>

      <div className='Skills'>
        <h1>Dev-Tools</h1>
        <div className='SkillsGrid'>
          <section className='Git'>
            <img src="../src/assets/images/git.png" alt="Git" />
            <p>Git</p>
          </section>
          <section className='Github'>
            <img src="../src/assets/images/github.png" alt="GitHub" />
            <p>Github</p>
          </section>
          <section className='npm'>
            <img src="../src/assets/images/npm.png" alt="npm" />
            <p>npm</p>
          </section>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home