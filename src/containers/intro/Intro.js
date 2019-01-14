import React, { Component } from 'react';
import PROFILE from '../../assets/images/profile.png';
import RESUME from '../../assets/documents/resume-brian-cajulis.pdf';
import './Intro.scss';
import AnimatedGradientBG from '../../components/ui/animatedGradient/AnimatedGradientBG';

class Intro extends Component {
    onIconClickHandler = (type) => {
        if (type === 'github') {
            window.open('https://github.com/briancajulis', '_blank');
        } else if (type === 'linkedin') {
            window.open('https://www.linkedin.com/in/brian-robert-cajulis/', '_blank');
        } else if (type === 'resume') {
            window.open(RESUME, '_blank');
        }
    }

    render () {
        return (
            <AnimatedGradientBG>
                <img src={PROFILE} alt='profile_pic' className="rounded-circle image" />
                <div className='text'>
                    <h1 className='font-weight-bold'>Brian Robert Cajulis</h1>
                    <h1>Software Engineer</h1>
                </div>
                <div className='grid-container'>
                    <button className="btn" onClick={() => this.onIconClickHandler('linkedin')}>
                        <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button className="btn grid-item" onClick={() => this.onIconClickHandler('github')}>
                        <i className="fab fa-github"></i>
                    </button>
                    <button className="btn grid-item" onClick={() => this.onIconClickHandler('resume')}>
                        <i className="fas fa-file-pdf"></i>
                    </button>
                </div>
            </AnimatedGradientBG>
        );
    }
}

export default Intro;