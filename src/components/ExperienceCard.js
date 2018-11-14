import React from 'react';
import './ExperienceCard.scss';

const experienceCard = (props) => {
    const details = props.experience.details.map((detail, index) => {
        return (
            <li className="card-text" key={index}>{detail}</li>
        );
    })
    return (
        <div className="card-experience">
            <div className="card-body">
                <div>
                    <div className="title-container">
                        <img className="logo" src={props.experience.logo} alt={props.experience.company} />
                        <div className="card-title">{props.experience.company} - {props.experience.position}</div>
                    </div>
                    <div className="card-title">{props.experience.location}</div>
                </div>
                
                <div className="card-subtitle">{props.experience.dates.start} - {props.experience.dates.end}</div>
                {details}
            </div>
        </div>
    );
};

export default experienceCard;