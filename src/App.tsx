import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Nav } from './components/Nav/Nav';
import { HeadSection } from './components/HeadSection/HeadSection';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Header } from './components/Header/Header';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
<Header/>
      <HeadSection/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    
     <Nav></Nav>
    </div>
  );
}

export default App;
