import React from 'react';

const Experience = () => {
    return (
        <div className='experience'>
            <h3> Expériences </h3>
            <div className="exp-1">
                <h4> Développeur Web </h4>
                <h5> Sopra Steria - depuis septembre 2024</h5>
                <p> Mes différentes missions consistent à assurer la maintenance et l'amélioration continue de l'application backend en Java 17, 
                    en garantissant sa stabilité et ses performances. Cela inclut également la mise en place de tests unitaires et d'intégration afin d'assurer la fiabilité du code et d'optimiser les processus de développement.
                     Par ailleurs, je participe activement à la refonte de l'interface utilisateur en Ember.js et Angular, en veillant à offrir une expérience utilisateur fluide, moderne et intuitive..</p>
            </div>

            <div className="exp-2">
                <h4> Développeur Web </h4>
                <h5> Solocal - Oct 2023 à Août 2024</h5>
                <p> J'ai travaillé sur la mise en place d'une API interne pour accéder aux contenus des professionnels, avec modération et agrégation des données. 
                    et intervenu sur l'ajout et la modification de fonctionnalités en Angular côté client et en Java (Spring Boot, MongoDB) côté serveur. 
                    J'ai contribué aussi à l'amélioration des tests d'intégration et unitaires ainsi qu'aux montées de version techniques.</p>
            </div>

            <div className="exp-3">
                <h4> Développeur Python </h4>
                <h5> 3DITEX - Nov 2022 à Sept 2023</h5>
                <p> Mes différentes missions consistaient à développer des logiciels pour différentes machines, 
                    permettant ainsi la conception 
                    et la réalisation de tubes et de composites,
                    ainsi que des interfaces graphiques pour une communication efficace avec ces machines.</p>
            </div>
        </div>
    );
};

export default Experience;