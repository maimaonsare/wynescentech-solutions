import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Online from './components/pages/Online';
import Offline from './components/pages/Offline';
import Contact from './components/pages/Contact';
import Footer from './components/footer/Footer';

import Navbarmenu from './components/menu/Navbar';

function App() {
  return (
    <div className='App'>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />
        
        <Routes> 
          <Route exact path="/" Component={Home}/>
          <Route path="/About" Component={About}/>
          <Route path="/Online" Component={Online}/>
          <Route path="/Offline" Component={Offline}/>
          <Route path="/Contact" Component={Contact}/>          
        </Routes>
        {/*Add footer */}
        <Footer />
      </Router>

    </div>
  );
}

export default App;
