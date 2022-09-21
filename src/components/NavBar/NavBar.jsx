import React from 'react';
import './NavBar.css';
import Icon from './icon.svg';

const NavBar = () => {
    return(
        <div className="NavBar">
            <img src={Icon} alt="HackTheBox-Icon"/>
            <div className="NavTitle"><b>HACK</b>THE<b>BOX</b>&nbsp;&nbsp;<b className="srmist">SRMIST</b></div>
            <div className="NavHome">Home</div>
            <div className="NavTeam">Team</div>
            <div className="NavEvents">Events</div>
            <div className="NavContact">Contact Us</div>
        </div>
    );
}

export default NavBar;