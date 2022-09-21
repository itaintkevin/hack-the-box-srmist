import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/Home/Home.jsx';
import Team from './components/Team/Team.jsx';
import Events from './components/Events/Events.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
    return(
        <>
            <NavBar />
            <Home />
            <Team />
            <Events />
            <Contact />
            <Footer />
        </>
    );
}

export default App;