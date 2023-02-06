import React from 'react';
import recommandation from "../../../media/Recommandations.pdf";

const Experience = () => {
    return (
        <div className='experience'>
            <h3> Expériences </h3>
            <div className="exp-1">
                <h4> Développeur python </h4>
                <h5> 3DITEX - depuis décembre 2022</h5>
                <p> Mes différentes missions consistent à développer des logiciels pour différentes machines, 
                    permettant ainsi la conception 
                    et la réalisation de tubes et de composites,
                    ainsi que des interfaces graphiques pour une communication efficace avec ces machines.</p>
            </div>
            <div className="exp-2">
                <h4> Développeur Web </h4>
                <h5>Incomm - Septembre 2022 - décembre 2022 </h5>
                <p> Au sein de l'entreprise Incomm, j'étais en charge de la conception, de l'utilisation et de la configuration de plugins et modules,
                         ainsi que de la mise en ligne de sites web. J'ai également assuré des tâches liées au transfert de noms de domaine, à la maintenance et à la modification des sites web, 
                         notamment les sites e-commerce et les sites vitrines, en utilisant les systèmes de gestion de contenu WordPress et Prestashop.</p>
            </div>
            <div className="exp-3">
                <h4> Agent de restauration rapide </h4>
                <h5> Burger King Petit Quevilly - Mai 2019 - Septembre 2022</h5>
                <p> Prise et préparation de Commandes , service à table , Plonge</p>
                <p className = "pdf"> <a href = {recommandation} target = "_blank"> Lettre de recommandation </a></p>
            </div>
        </div>
    );
};

export default Experience;