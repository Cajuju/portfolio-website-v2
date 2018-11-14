import React, { Fragment } from 'react';
import './ProjectCard.scss';
import Modal from './Modal';

const projectCard = (props) => {
    let developedWith = null;
    if (props.project.madeWith) {
        developedWith = props.project.madeWith.join('+');
    }

    let cardOverlay = null;

    let dataTarget = '#' + props.project.name.replace(/\s/g,'');

    let dates = null;
    if (props.project.date.end) {
        dates = <p className="card-text">{props.project.date.start} - {props.project.date.end}</p>
    } else {
        dates = <p className="card-text">{props.project.date.start}</p>
    }

    if (props.project.isHovering) {
        cardOverlay = (
            <div className="card-img-overlay">
                <div>
                    <h4 className="card-title">{props.project.name}</h4>
                    <p className="card-text">{developedWith}</p>
                    {dates}
                </div>
                <div>
                    <button type="button" className="btn-secondary" data-toggle="modal" data-target={dataTarget}>Learn More</button>
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
    return (
        <Fragment>
            {card}
            <Modal project={props.project} />
        </Fragment>
    );
}

export default projectCard;