import { useState } from 'react';
import React from 'react';

const Project = (props) => {
    let {name, languagesIcons, source, info, picture} = props.item;

    const [showInfo, setShowInfo] = useState(false);
    // const [exit, setExit] = useState(false)
   
    return (
        <div className='project'>
            <div className="icons">
                    {languagesIcons.map(icon => 
                        <i className={icon} key={icon}> </i>
                    )} 
                </div>
                       <h3> {name} </h3>
                        <img src = {picture} alt = "" onClick={() => setShowInfo(!showInfo)}/>
                        <span className='infos' onClick={() => setShowInfo(!showInfo)}> 
                            <i className='fas fa-plus-circle'> </i>
                        </span>
                        {
                            showInfo && (
                                <div className="showInfos">
                                    <div className="infosContent">
                                        <div className="head">
                                            <h2>{name}</h2>
                                            <div className="sourceCode">
                                                <a href = {source} rel = "noopener noreferrer"
                                                    className='button' target = "_blank"> Code Source</a>
                                            </div>
                                        </div>
                                        <p className='text'> {info} </p>
                                        <div className="button return" onClick={() => setShowInfo(!showInfo)}>
                                            Reourner sur la page
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    
        </div>
    );
};

// export default Project;
// class Project extends Component {
//     const [showfInfo, setShowInfo] = useState(True);
//     handleInfo = () => {
//         setShowInfo(!showfInfo);
//     }

   


//     render() {
    
//         let {name, languagesIcons, source, info, picture} = this.props.item;
//         return (
//             <div className='project'>
//                 <div className="icons">
//                     {languagesIcons.map(icon => 
//                         <i className={icon} key={icon}> </i>
//                     )} 
//                 </div>
//                        <h3> {name} </h3>
                        
//                         <img src = {picture} alt = ""/>
//                         <span className='infos'> 
//                             <i className='fas fa-plus-circle'> </i>
//                         </span>
                    
                
//             </div>
//         );
//     }
// }

export default Project;