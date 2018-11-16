import React, { Component } from 'react';
import './Experiences.scss';
import ExperienceCard from '../../components/ExperienceCard';
import APU from '../../assets/images/apu.png';
import ENDORSIFY from '../../assets/images/endorsify.png';

class Experiences extends Component {
    state = {
        experiences: [
            {
                logo: ENDORSIFY,
                company: 'Endorsify',
                position: 'Software Engineer Intern',
                dates: {
                    start: 'July 2018',
                    end: 'October 2018'
                },
                location: 'Los Angeles, CA',
                details: [
                    'Completed front end and back end development tasks and solved challenging interface breaking bugs',
                    'Quickly learned the basics of Laravel in order to complete tasks',
                    'Independently planned and developed on iOS app for their web app',
                    'Collaborated with UX designers to create clean, user friendly interfaces',
                    'Communicated consistently through Slack and kept progress up to date on Trello'
                ]
            },
            {
                logo: APU,
                company: 'Azusa Pacific University',
                position: 'Computer Science Lab Technician',
                dates: {
                    start: 'September 2017',
                    end: 'May 2018'
                },
                location: 'Azusa, CA',
                details: [
                    'Guided students with beginner to intermediate level programming concepts',
                    'Assisted students with Java related issues',
                    'Communicated with students in debugging various different web and mobile projects',
                    'Quickly learned programming language, frameworks, and tools that students may have questions with'
                ]
            },
            {
                logo: APU,
                company: 'Azusa Pacific University',
                position: 'CS Action Team Member',
                dates: {
                    start: 'May 2016',
                    end: 'June 2016'
                },
                location: 'Namibia, South Africa',
                details: [
                    'Interviewed target market to create use cases to specify software features',
                    'Participated in meetings to plan and to discuss the implementation of each feature',
                    'Independently learned new frameworks and programming languages needed for development',
                ]
            }
        ]
    }

    render () {
        const experiences = this.state.experiences.map((experience, index) => {
            return (
                <ExperienceCard experience={experience} key={index} />
            );
        })

        return (
            <div className="experience">
                {experiences}
            </div>
        );
    }
}

export default Experiences;