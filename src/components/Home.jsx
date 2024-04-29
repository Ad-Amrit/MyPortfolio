import React from 'react'
import '../styles/Home.css'
import Profile from '../assets/images/proff.png'
import Typewriter from 'react-typewriter-effect';

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
        <p>As a recent graduate in software engineering, I'm brimming with
           passion for web development and a thirst for knowledge. While I'm 
           new to the professional world, I've been actively honing my
           skills in HTML, CSS, and JavaScript. I'm particularly interested
           in front-end development and creating user-friendly
           interfaces.</p>
      </div>
      <div className='ImageSection'>
        <img src={Profile} alt="Image" />
      </div>
      </div>
      <div>
        <h1>Languages</h1>
        <div>
          <section>
             <img src="../src/assets/images/javascript.png" alt="Javascript" />
             <p>JAVASCRIPT</p>
          </section>
        </div>
      </div>

      <div>
        <h1>Front-end Tools</h1>
        <div>
          <section>
            <img src="../src/assets/images/reactjs.png" alt="React" />
            <p>React Js</p>
          </section>
          <section>
            <img src="../src/assets/images/bootstrap.png" alt="Bootstrap" />
            <p>Bootstrap</p>
          </section>
        </div>
      </div>

      <div>
        <h1>Dev-Tools</h1>
        <div>
          <section>
            <img src="../src/assets/images/git.png" alt="Git" />
            <p>Git</p>
          </section>
          <section>
            <img src="../src/assets/images/github.png" alt="GitHub" />
            <p>Github</p>
          </section>
          <section>
            <img src="../src/assets/images/npm.png" alt="npm" />
            <p>npm</p>
          </section>
        </div>
      </div>
      
    </div>
  )
}

export default Home