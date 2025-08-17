import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpcomingProjects from './components/UpcomingProjects.jsx';
import Navbar from './components/Navbar.jsx';
import ShowReel from './components/ShowReel.jsx';
import Films from './components/Films.jsx';
import TVShows from './components/TVShows.jsx';
import Theatre from './components/Theatre.jsx';
import Awards from './components/Awards.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Family from './components/Family.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/upcoming-projects' element={<UpcomingProjects/>}/>
      <Route path='/showreel' element={<ShowReel/>}/>
      <Route path='films' element={<Films/>}/>
      <Route path='/tvshows' element={<TVShows/>}/>
      <Route path='/theatre' element={<Theatre/>}/>
      <Route path='/awards' element={<Awards/>}/>
      <Route path='/stats' element={<Stats/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/family' element={<Family/>}/>
    </Routes>
  </BrowserRouter>,
)
