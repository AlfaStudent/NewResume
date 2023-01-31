import React from 'react';
import Image from '../media/photo.jpg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className="idContent">
                <img src= {Image} alt='profi-pic'/>
                <h3> Alpha Abdoulaye Conde </h3>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to ="/" activeClassName = "navActive">
                            <i className='fas fa-home'></i>
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
                            <i className="fa fa-adress-book"></i>
                            <spam> Contact </spam>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href ="https://www.google.com" target={"_blank"} 
                        rel = "noopener noreferrer"><i className='fab fa-linkedin'> </i> </a>
                    </li>
                    <li>
                        <a href ="https://www.google.com" target={"_blank"} 
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
            </div>
            <div className="signature">
                <p> Alpha - 2022 </p>
            </div>
            
        </div>
    );
};

export default Navigation;