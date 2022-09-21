import React from 'react';
import './Home.css';
import HomeImg from './Img-1.svg'
import MeetUp from './meetup.svg'
import Discord from './discord.svg'

const Home = () => {
    return(
        <div className="Home">
            <div className="Home-Container-Left">
                <div className="Home-Image">
                    <img src={HomeImg} alt="Home Iamge"/>
                </div>
            </div>
            <div className="Home-Container-Right">
                <div className="Home-Title">
                    <b>HACK</b>THE<b>BOX</b>
                </div>
                <br />
                <div className="Home-Details">
                    <p className="Home-Details-Para-1">
                        Meet Up: Chennai, India
                        <hr/>
                        Supported by: SRMIST
                    </p>
                    <hr/>
                    <p className="Home-Details-Para-2">
                        HackTheBox SRMIST focuses on training the next-gen of cyber-warriors transforming the cyber space in SRMIST and beyond.
                    </p>
                    <hr/>
                    <p className="Home-Details-Para-3">
                        Hello! There Cyber Geeks!! Interested in cybersecurity and penetration testing? 
                        <hr/>
                        What are you waiting for? Click on the button and join the Hack the Box community meet-up. 
                        <br/>
                        <br/>
                        <br/>
                        <a className="MeetUp-Form" href="blank"><img src={MeetUp} alt="Meet-Up logo"/>  MeetUp Form</a>
                        <a className="Discord-Server" href="blank"><img src={Discord} alt="Discord logo"/>  Discord Server</a>
                        <br/>
                        <br/>
                        <br/>
                        The primary goal of this meet-up is to bring together information security aficionados to debate and share their expertise about cybersecurity, hack machines from Hack The Box dedicated to this forum and whoop the cyber fever up!
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Home;