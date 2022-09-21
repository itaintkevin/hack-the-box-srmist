import React from 'react';
import './Events.css';
import Poster from './Poster.jpg';

const Events = () => {
    return(
        <div className="Events">
            <div className="Events-Left-Container">
                <div className="Event-Title">Z3R0 D4Y</div>
                <div className="Event-Content">
                    <div className="Event-Description">
                        We, HackTheBox SRMIST (HTBSRMIST), are hosting our inaugural event and the first meetup on the 12th of May 2022 at 1 pm IST. 
                        <br/>
                        <br/>
                        This offline event will be hosted at Dr. TP Ganesan Auditorium, TP Mini Hall 1 & 2, SRM Institute of Science and Technology, Kattankulathur.
                    </div>
                    <div className="Event-Panel">
                        The Elite panel of guests who will inaugurate the event are:-
                        <br/>
                        <div className="Guest">           
                        <span>&nbsp;&gt;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Mr. Chandran Subramanian</b> - Founder, and Director of CyberFort Solution Private Ltd.
                        </div>
                        <br/>
                        <div className="Guest">
                        <span>&nbsp;&gt;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Prof. T. V. GOPAL Dean</b> - College of Engineering and Technology, SRMIST.
                        </div>
                        <br/>
                        <div className="Guest">
                        <span>&nbsp;&gt;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Dr. Revathi Venkataraman</b> - Professor & Chairperson School of Computing SRMIST.
                        </div>
                        <br/>
                        <div className="Guest">
                        <span>&nbsp;&gt;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Dr. Annapurani Panaiyappan K.</b> - Associate Professor, HoD Networking and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Communications.
                        </div>
                    </div>
                    <div className="Event-Description">
                        Following the inauguration, a hands-on workshop will take place in Mini Hall 1 & 2. 
                        <br/>
                        The mentors will conduct a walk through of machines provided by the HackTheBox team. Students will follow along the mentors.
                    </div>
                    <div className="Event-Details">
                        <div>
                            <b>Location</b>  
                            <br/>
                            SRMIST, Chennai 
                        </div>
                        <div>
                            <b>Price </b>
                            <br/>
                            Free of Cost 
                        </div>
                        <div>
                            <b>Date</b> 
                            <br/>
                            12th May 2022
                        </div>
                    </div>
                </div>
            </div>
            <div className="Events-Right-Container">
                <div className="Event-Poster">
                    <img className='Poster' src={Poster} alt="Z3R0 D4Y - Poster" />
                </div>
                <div className="Event-Prerequisites">
                        Prerequisites for the Hands-on Workshop:-
                        <br/>
                        <div className="Guest">           
                        <span>&nbsp;&gt;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Laptop
                        </div>
                        <br/>
                        <div className="Guest">           
                        <span>&nbsp;&gt;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VMWare or Virtual Box
                        </div>
                        <br/>
                        <div className="Guest">           
                        <span>&nbsp;&gt;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        Preinstalled. - Security Oriented Operating System 
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        (Kali Linux is recommended) installed in the above mentioned &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtualization tools.
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Events;