import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        Languages: [
            {id : 1, value: "HTML5 & CSS3", xp: 2.9},
            {id : 2, value: "C", xp: 2.5},
            {id : 3, value: "javaScript", xp: 2.0},
            {id : 4, value: "Python", xp: 2.0},
            {id : 5, value: "Ocaml", xp: 1.9},
            {id : 6, value: "PHP", xp: 1.7},
            {id : 7, value: "C#", xp: 1.3},
            {id : 8, value: "Swift", xp: 1.2},
        ],
        Framework: [
            {id : 1, value: "React", xp: 1.8},
            {id : 2, value: "NodeJs & Express", xp: 1.6},
            {id : 4, value: "MongoDb & Mongoose", xp: 1.4},
            {id : 3, value: ".NET", xp: 1.2},
            {id : 5, value: "PyQt5", xp: 1.0},
            

        ]
    }

    render() {
        let {Languages, Framework } = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                    languages={Languages}
                    className="languageDisplay"
                    title= "langages"
                />
                <ProgressBar
                    languages = {Framework}
                    title = "frameworks & bibliothèques"
                    className = "frameworkDisplay"
                    

                />
                
            </div>
        );
    }
}

export default Languages;