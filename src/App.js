import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import Menu from './Menu/Menu';
import AboutPage from './Aboutpage/Aboutpage';
import Hero from './Hero/Hero';
import HomePage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import LoginPage from './Loginpage/Loginpage';
function App() {
  return (
    < Router>
   <Menu/>
      <Hero/>
      <div div className="mainContainer">
      <switch>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>

      </switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;