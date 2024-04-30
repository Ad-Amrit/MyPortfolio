import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div className='Projects'>
        <div>
          <section>
            <img src="../src/assets/images/futsamanagement.png" alt="Image" />
            <h1>FUTSA (Futsal Booking and Management System)</h1>
            <a href="https://futsa-finalproject-web.vercel.app/" target='_blank'>Preview</a>
          </section>

          <section>
            <img src="../src/assets/images/movieapp.jpeg" alt="Image" />
            <h1>MovieApp</h1>
            <a href="https://github.com/Ad-Amrit/MovieApp.git" target='_blank'>Preview</a>
          </section>

          <section>
            <img src="../src/assets/images/unitconverter.png" alt="Image" />
            <h1>Unit Converter</h1>
            <a href="https://github.com/Ad-Amrit/Unit-Converter.git" target='_blank'>Preview</a>
          </section>

          <section>
            <img src="../src/assets/images/futsabooking.png" alt="Image" />
            <h1>Futsal Booking System</h1>
            <a href="https://futsa-finalproject-web.vercel.app/" target='_blank'>Preview</a>
          </section>
        </div>
    </div>
  )
}

export default Projects