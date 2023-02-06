import {React} from 'react';
import Navigation from '../components/Navigation';
import cv from "../media/cv-alpha-conde.pdf";
const Home = () => {
    return (
        <div className='home'> 
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1> Alpha Abdoulaye Conde </h1>
                    <h2> Développeur fullStack </h2>
                    <div className="pdf">
                        <a href = {cv} target="_blank"> Télécharger le CV </a>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;