import React from 'react';
import './Contact.css';
import Img from './Img-2.svg';

const Contact = () => {
    return(
        <div className="Contact">
            <div className="ContactUs-Left-Container">
                <img src={Img} alt="Hacker-Img" />
            </div>
            <div className="ContactUs-Right-Container">
                <div className="ContactUs-Title">Contact Us</div>
                <div className="ContactUs-Description">Hey, wanna have some chit chat with us. Feel free to reach out. 
                <br/>
                New ideas, event collaborations, feedbacks, want to offer Bagel (so sweet of you) anything. We up for it. :) (wink wink).</div>
                <div className="ContactUs-Form">
                    <div className="ContactUs-Name">
                        <input type="text" name="name" placeholder="Name" required/>
                    </div>
                    <div className="ContactUs-Email">
                        <input type="text" name="email" placeholder="E-mail" required/>
                    </div>
                    <div className="ContactUs-Number">
                        <input type="text" name="number" placeholder="Contact Number" required/>
                    </div>
                    <div className="ContactUs-Message">
                        <input type="text" name="message" placeholder="Say Hi!" required/>
                    </div>
                    <div className="ContactUs-Send">
                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;