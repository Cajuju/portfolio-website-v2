import React from 'react';
import './SkillCard.scss';

const skillCard = (props) => {
    const column = props.skill.items.map((item, index) => {
        return (
            <div className="column" key={index}>
                <img className="logo" src={item.logo} alt={item.name} />
                <div className="card-subtitle">{item.name}</div>
            </div>
        );
    });
    return (
        <div className="card-skill">
            <div className="card-body">
                <div className="card-title">{props.skill.category}</div>
                <hr />
                <div className="column-container">
                    {column}
                </div>
            </div>
        </div>
    );
};

export default skillCard;