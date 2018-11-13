import React from 'react';
import './SectionHeader.scss';

const sectionHeader = (props) => {
    return (
        <div className="header">
            <h1 className="font-weight-bold">{props.title}</h1>
        </div>
    )
}

export default sectionHeader;