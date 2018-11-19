import React from 'react';
import './Modal.scss';
import VideoPlayer from './VideoPlayer';

const modal = (props) => {
    let modalId = props.project.name.replace(/\s/g,'');

    let badges = null;
    if (props.project.madeWith) {
        badges = props.project.madeWith.map((skill, index) => {
            return (<span className="badge badge-secondary" key={index}>{skill}</span>);
        })
    }
    
    let dates = null;
    if (props.project.date.end) {
        dates = <p className="dates">{props.project.date.start} - {props.project.date.end}</p>
    } else {
        dates = <p className="dates">{props.project.date.start}</p>
    }

    return (
        <div className="modal fade" id={modalId}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <img className="img-thumbnail" src={props.project.image} alt={props.project.name}/>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h5 className="modal-title">{props.project.name}</h5>
                        <div className="badge-container">
                            {badges}
                        </div>
                        {dates}
                    </div>
                    <p className="description">{props.project.description}</p>
                    { props.project.website ? <p className="description">For more information, <label className="link" onClick={() => window.open(props.project.website, '_blank')}>Click Here</label></p> : null }
                    { props.project.code ? <p className="description">To view codebase, <label className="link" onClick={() => window.open(props.project.code, '_blank')}>Click Here</label></p> : null }
                    { props.project.demo ? <VideoPlayer source={props.project.demo} /> : null }
                </div>
            </div>
        </div>
    );
}

export default modal;