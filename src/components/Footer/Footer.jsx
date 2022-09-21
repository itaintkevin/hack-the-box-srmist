import React from 'react';
import './Footer.css';
import Icon from './icon.svg';
import College from './college.svg';
import Mailbox from './mailbox.svg';

const Footer = () => {
    return(
        <div className="Footer">
            <div className="Footer-Container">
                <div className="Footer-Logo-container">
                    <div className="Logo">
                        <img src={Icon} alt="HackTheBox-Icon"/>
                        <div className="Title"><b>HACK</b>THE<b>BOX</b>&nbsp;&nbsp;<b className="srmist">SRMIST</b></div>
                    </div>
                    <div className="Quote">
                        TRANSFORMING THE CYBERSCPACE IN SRMIST AND BEYOND.</div>
                    </div>
                <div className="Footer-Links-Container">
                    <div className="Explore">Explore</div>
                    <div className='Links-container'>
                        <div className="Home-Footer">Home</div>
                        <div className="Team-Footer">Team</div>
                        <div className="Events-Footer">Events</div>
                        <div className="Contact-Footer">Contact Us</div>
                    </div>
                </div>
                <div className="Footer-Contacts-Container">
                    <div className="Contact-Title">Contact</div>
                    <div className="Address-container">
                        <img src={College} alt="Address" />
                        <div className="Address">SRM Kattankulathur, Chengalpattu, 603203, IN</div>
                    </div>
                    <div className="Email-container">
                        <img src={Mailbox} alt="Email" />
                        <div className="Email">community@htbsrmist.tech</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;