import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        Languages: [
            {id : 1, value: "javaScript", xp: 2.5},
            {id : 2, value: "HTML & CSS", xp: 2.6},
            {id : 3, value: "Ocaml", xp: 2.5},
            {id : 4, value: "C", xp: 2.6},
            {id : 5, value: "PHP", xp: 1.9},
            {id : 6, value: "Python", xp: 2.0},
            {id : 7, value: "C#", xp: 1.8},
            {id : 8, value: "Swift", xp: 1.2},
        ],
        Framework: [
            {id : 1, value: "React", xp: 2.0},
            {id : 2, value: ".NET", xp: 1.9},
            {id : 3, value: "Sass", xp: 1.0},
            {id : 4, value: "Pyluos", xp: 1.0},
            {id : 5, value: "PyQt5", xp: 1.6},
            

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