import React, { Component } from 'react';

class OtherSkills extends Component {
    render() {
        return (
            <div className='otherSkills'>
                <h3> Autres Compétences </h3>
                <ul>
                    <li> 
                        <i className='fas fa-check-square'> </i> Méthode Agile (SCRUM)
                    </li>
                    <li> 
                        <i className='fas fa-check-square'> </i> Github
                    </li>
                    <li> 
                        <i className='fas fa-check-square'> </i> Anglais
                    </li>
                </ul>
                <ul>
                    <li> 
                        <i className='fas fa-check-square'> </i> Wordpress 
                    </li>
                    <li> 
                        <i className='fas fa-check-square'> </i> PrestaShop
                    </li>
                    <li> 
                        <i className='fas fa-check-square'> </i> Anglais
                    </li>
                </ul>

            </div>
        );
    }
}

export default OtherSkills;