import React from 'react';
import Image from '../media/photo.jpg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src= {Image} alt='profi-pic'/>
                    <h3> Alpha Abdoulaye Conde </h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to ="/" activeClassName = "navActive">
                            <i className='fas fa-home'></i>
                            <i class="fa-home" aria-hidden="true"></i>
                            <spam> Accueil</spam>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/competences" activeClassName = "navActive">
                                <i className="fas fa-mountain"></i>
                                <spam> Competence</spam>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ="/portfolio" activeClassName = "navActive">
                            <i className="fas fa-images"></i>
                            <spam> Portfolio </spam>
                        </NavLink>


                    </li>
                    <li>
                        <NavLink exact to ="/contact" activeClassName = "navActive">
                            <i className="fas fa-envelope"></i>
                            <spam> Contact </spam>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href ="http://linkedin.com/in/alpha-abdoulaye-conde-703252204" target={"_blank"} 
                        rel = "noopener noreferrer"><i className='fab fa-linkedin'> </i> </a>
                    </li>
                    <li>
                        <a href ="https://github.com/AlfaStudent" target={"_blank"} 
                        rel = "noopener noreferrer"><i className='fab fa-github'> </i> </a>
                    </li>
                    <li>
                        <a href ="https://www.google.com" target={"_blank"} 
                        rel = "noopener noreferrer"><i className='fab fa-twiter'> </i> </a>
                    </li>
                    <li>
                        <a href ="https://www.google.com" target={"_blank"} 
                        rel = "noopener noreferrer"><i className='fab fa-codepen'> </i> </a>
                    </li>
                </ul>
                <div className="signature">
                <p> Alpha Abdoulaye CONDE </p>
            </div>
            
            </div>
            
        </div>
    );
};

export default Navigation;