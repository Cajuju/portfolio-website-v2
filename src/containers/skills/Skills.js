import React, { Component } from 'react';
import './Skills.scss';
import SkillCard from '../../components/SkillCard';
import REACT from '../../assets/images/react.png';
import REACTNATIVE from '../../assets/images/react-native.png';
import BOOTSTRAP from '../../assets/images/bootstrap.png';
import REDUX from '../../assets/images/redux.png';
import LARAVEL from '../../assets/images/laravel.png';
import JAVA from '../../assets/images/java.png';
import JAVASCRIPT from '../../assets/images/javascript.png';
import ECMA from '../../assets/images/ecmascript.png';
import HTML from '../../assets/images/html.png';
import CSS3 from '../../assets/images/css.png';
import SASS from '../../assets/images/sass.png';
import GIT from '../../assets/images/git.png';
import EXPO from '../../assets/images/expo.png';
import FIREBASE from '../../assets/images/firebase.png';
import SLACK from '../../assets/images/slack.png';
import TRELLO from '../../assets/images/trello.png';
import LUCIDCHART from '../../assets/images/lucidchart.png';
import INVISION from '../../assets/images/invision.png';
import GIMP from '../../assets/images/gimp.png';

class Skills extends Component {
    state = {
        skills: [
            {
                category: 'Frameworks & Libraries',
                items: [
                    { name: 'React', logo: REACT },
                    { name: 'React Native', logo: REACTNATIVE },
                    { name: 'Bootstrap', logo: BOOTSTRAP },
                    { name: 'Redux', logo: REDUX },
                    { name: 'Laravel', logo: LARAVEL },
                ]
            },
            {
                category: 'Programming Languages',
                items: [
                    { name: 'Java', logo: JAVA },
                    { name: 'JavaScript', logo: JAVASCRIPT },
                    { name: 'ECMAScript', logo: ECMA },
                    { name: 'HTML', logo: HTML },
                    { name: 'CSS', logo: CSS3 },
                    { name: 'Sass', logo: SASS },
                ]
            },
            {
                category: 'Tools & Platforms',
                items: [
                    { name: 'Git', logo: GIT },
                    { name: 'Expo', logo: EXPO },
                    { name: 'Firebase', logo: FIREBASE },
                    { name: 'InVision', logo: INVISION },
                    { name: 'Lucidchart', logo: LUCIDCHART },
                    { name: 'Slack', logo: SLACK },
                    { name: 'Trello', logo: TRELLO },
                    { name: 'Gimp 2', logo: GIMP },
                ]
            }
        ]
    }

    render () {
        const cards = this.state.skills.map((skill, index) => {
            return (
                <SkillCard skill={skill} key={index} />
            );
        })
        return (
            <div className="skills">
                {cards}
            </div>
        );
    }
}

export default Skills;