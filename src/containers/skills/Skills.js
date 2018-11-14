import React, { Component } from 'react';
import './Skills.scss';
import SkillCard from '../../components/SkillCard';
import REACT from '../../assets/react.png';
import REACTNATIVE from '../../assets/react-native.png';
import REDUX from '../../assets/redux.png';
import LARAVEL from '../../assets/laravel.png';
import JAVA from '../../assets/java.png';
import JAVASCRIPT from '../../assets/javascript.png';
import ECMA from '../../assets/ecmascript.png';
import HTML from '../../assets/html.png';
import CSS3 from '../../assets/css.png';
import SASS from '../../assets/sass.png';
import GIT from '../../assets/git.png';
import GIMP from '../../assets/gimp.png';
import EXPO from '../../assets/expo.png';
import SLACK from '../../assets/slack.png';
import TRELLO from '../../assets/trello.png';
import LUCIDCHART from '../../assets/lucidchart.png';

class Skills extends Component {
    state = {
        skills: [
            {
                category: 'Frameworks & Libraries',
                items: [
                    { name: 'React', logo: REACT },
                    { name: 'React Native', logo: REACTNATIVE },
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
                category: 'Tools',
                items: [
                    { name: 'Git', logo: GIT },
                    { name: 'Expo', logo: EXPO },
                    { name: 'Slack', logo: SLACK },
                    { name: 'Trello', logo: TRELLO },
                    { name: 'Lucidchart', logo: LUCIDCHART },
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