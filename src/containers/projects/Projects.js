import React, { Component } from 'react';
import './Projects.scss';
import ProjectCard from '../../components/ProjectCard';
import COFFEEPOT from '../../assets/coffeePot.png'
import NAMIBIA from '../../assets/namibia.png';
import PLACEHOLDER from '../../assets/placeholder.png'

class Projects extends Component {
    state = {
        projects: [
            {
                name: 'Coffee Pot',
                madeWith: [
                    'React Native',
                    'Redux',
                    'Javascript',
                    'Firebase',
                    'Google APIs'
                ],
                date: {
                    start: 2017,
                    end: 2018,
                },
                description: 
                    'Coffee Pot is a peer to peer coffee delivery mobile application which was developed thorughout my Software Engineering course at Azusa Pacific University.  '
                    + 'The idea of this app is that anyone who meets the requirements are allowed to be a deliverer for Coffee Pot.  '
                    + 'It does not take much to meet the requirements, but the experience should be the same as if you were to lend money to a friend or coworker to purchase coffee for you.  '
                    + 'This application aims to connect people to others who can buy coffee for those who are unable to find the time to buy coffee.  '
                    + 'The overall goal of this application is to improve each user\'s overall quality of life.  ',
                isHovering: false,
                image: COFFEEPOT,
                showModal: false
            },
            {
                name: 'My Club',
                madeWith: [
                    'React Native',
                    'Redux',
                    'JS',
                    'Firebase'
                ],
                year: {
                    start: 2017,
                    end: 'Current',
                },
                description: 
                    'My Club is a mobile application that allow student to view clubs available on their campus and to be kept up to date with their subscribed club\'s activity.  '
                    + 'This project started off as a final assignemnt for my Mobile App Development course, and I decided to continue development of this application after the course.  '
                    + 'I use this project to consistently improve my skills in developing in React Native and Redux.  ' 
                    + 'The main reason I started this project was through my experiences as a club leader, and my interaction with other students who find it difficult to join clubs even with the given resources.  '
                    + 'My overall goal for this application is to give students and club leaders an easier and much more efficient way to connect  ',
                isHovering: false,
                image: PLACEHOLDER,
                showModal: false,
            },
            {
                name: 'Website Portfolio V1',
                madeWith: [
                    'HTML',
                    'CSS',
                    'BootStrap',
                    'PHP',
                    'JS',
                ],
                year: {
                    start: 2016,
                    end: 2017,
                },
                description: 
                    'Website Portfolio V1 is the first independet project I decided to pursue after a month long trip working in Namibia.  '
                    + 'The point of this project was to challenge myself to independently learn new languages and frameworks.  '
                    + 'In this project, I used Bootstrap to achieve the responsive behavior, and also created multiple "flat art" graphics to accompany the minimalist look.  ' 
                    + 'The website was developed with HTML, CSS, JavaScript, and PHP.  ' 
                    + 'Currently, You are looking at version two of this project, which is developed entirely in React.  ',
                isHovering: false,
                image: PLACEHOLDER,
                showModal: false
            },
            {
                name: 'Namibia Action Team Project',
                madeWith: null,
                year: {
                    start: 2016,
                    end: null,
                },
                isHovering: false,
                image: NAMIBIA,
                showModal: false,
                description:
                    'A Computer Science major specific action team to Namibia, which is located in South Africa.  ' 
                    + 'During my time in Namibia, I worked with students and professors at NUST (Namibia University of Science and Technology) to create and set a foundation for a health informatics system for public and private hospitals to use.  ' 
                    + 'My team and I created relationships, formed partnerships, and gained full support from various doctors and many influential people of Namibia.  '
                    + 'Every day of the trip exercised my ability to think clearly in many situations that required me to be out of my comfort zone.  ',
            },
        ]
    }

    mouseEnterHandler = (index) => {
        let updatedState = {...this.state.projects};
        updatedState[index].isHovering = true;
        this.setState(updatedState);
    }

    mouseLeaveHandler = (index) => {
        let updatedState = {...this.state.projects};
        updatedState[index].isHovering = false;
        this.setState(updatedState);
    }

    render () {
        const projectCards = this.state.projects.map((project, index) => {
            return (
                <ProjectCard
                    key={index}
                    mouseEnter={() => this.mouseEnterHandler(index)}
                    mouseLeave={() => this.mouseLeaveHandler(index)}
                    project={project}
                />
            );
        })
        return (
            <div className="projects">
                {projectCards}
            </div>
        );
    }
}

export default Projects;