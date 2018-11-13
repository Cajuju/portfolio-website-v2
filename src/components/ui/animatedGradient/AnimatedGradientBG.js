import React from 'react';
import './AnimatedGradientBG.scss';

const animatedGradientBG = (props) => {
    return (
        <div className='Gradient-BG Position'>
            {props.children}
        </div>
    );
}

export default animatedGradientBG;