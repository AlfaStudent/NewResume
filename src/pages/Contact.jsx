import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from "react-copy-to-clipboard";

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1> Contactez-moi </h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span> Bordeaux </span>
                        </li>
                        <li> 
                            <i className='fas fa-mobile-alt'> </i>
                            <CopyToClipboard  text = "0767453691">
                                <span className='clickInput' onClick= {() => {alert("téléphone copié !");}}> 07 67 45 36 91 </span>
                            </CopyToClipboard>
                            
                        </li>
                        <li> 
                            <i className='far fa-envelope'> </i>
                            <CopyToClipboard  text = "abdoul.conde99@gmail.com">
                                <span className='clickInput' onClick= {() => {alert("E-mail copié !");}}> abdoul.conde99@gmail.com </span>
                            </CopyToClipboard>                          
                        </li>                   
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href = "http://linkedin.com/in/alpha-abdoulaye-conde-703252204" target="_blank" rel = "noopener noreferrer">
                            <h4> LinkedIn </h4>
                            <i className= "fab fa-linkedin" ></i>
                        </a>

                        <a href = "https://github.com/AlfaStudent" target="_blank" rel = "noopener noreferrer">
                            <h4> Github </h4>
                            <i className= "fab fa-github" ></i>
                        </a>

                        <a href = "https://mobile.twitter.com/Abdoula91211523" target="_blank" rel = "noopener noreferrer">
                            <h4> Twiter </h4>
                            <i className= "fab fa-twitter" ></i>
                        </a>

                        <a href = "https://www.codingame.com/profile/3c249db925dfa6933908387e04ac14145187315" target="_blank" rel = "noopener noreferrer">
                            <h4> CodinGame </h4>
                            <i className= "fas fa-code" ></i>
                        </a>

                    </ul>
                </div>

            </div>

            
        </div>
    );
};

export default Contact;