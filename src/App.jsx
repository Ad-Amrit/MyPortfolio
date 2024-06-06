import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Posts from './components/Posts'
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'


function App() {
  return (
    <>
        <Router>
          <Navbar/>
          {/* <Sidebar/> */}
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/Projects' element={<Projects/>} />
              <Route path='/Contact' element={<Contact/>} />
              <Route path='/Posts' element={<Posts/>}/>
            </Routes>
        </Router>
        
    </>
  )
}

export default App
