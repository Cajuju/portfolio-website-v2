import React from 'react';
import './ProjectCard.scss';

const projectCard = (props) => {
    let developedWith = null;
    if (props.project.madeWith) {
        developedWith = props.project.madeWith.join('+');
    }

    let cardOverlay = null;

    if (props.project.isHovering) {
        cardOverlay = (
            <div className="card-img-overlay">
                <div>
                    <h4 className="card-title">{props.project.name}</h4>
                    <p className="card-text">{developedWith}</p>
                </div>
                <div>
                    <button type="button" className="btn-primary">Learn More</button>
                </div>
            </div>
        );
    }
    
    let card = (
        <div
            className='card'
            onMouseEnter={props.mouseEnter}
            onMouseLeave={props.mouseLeave}
        >
            <img className="card-img-top" src={props.project.image} alt={props.project.name}/>
            {cardOverlay ? cardOverlay : null}
        </div>
    );
    return card;
}

export default projectCard;