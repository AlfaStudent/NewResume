import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        Languages: [
            {id : 1, value: "javaScript", xp: 1.0},
            {id : 2, value: "HTML", xp: 2},
            {id : 3, value: "CSS", xp: 0.7},
            {id : 4, value: "C", xp: 1.0},
            {id : 5, value: "PHP", xp: 1.5},
            {id : 6, value: "Python", xp: 1.0},
            {id : 1, value: "C#", xp: 1.0},
        ],
        Framework: [
            {id : 1, value: "React", xp: 1.0},
            {id : 1, value: ".NET", xp: 1.0},
            {id : 1, value: "Boostrap", xp: 1.0},
            {id : 1, value: "sass", xp: 1.0},
            {id : 1, value: "", xp: 1.0},

        ]
    }

    render() {
        let {Languages, Framework } = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar
                    languages={Languages}
                    className="languagesDisplay"
                    title= "languages"
                />
                <ProgressBar
                    languages = {Framework}
                    title = "framework & bibliothèques"
                    className = "frameworksDisplay"
                    

                />
                
            </div>
        );
    }
}

export default Languages;