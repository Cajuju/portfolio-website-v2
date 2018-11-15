import React, { Component } from 'react';
import PROFILE from '../../assets/profile.png';
import RESUME from '../../assets/resume-brian-cajulis.pdf';
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
                    <h1>Web/Mobile Developer</h1>
                </div>
                <div className='btnContainer'>
                    <button className="btn btn-circle" onClick={() => this.onIconClickHandler('linkedin')}>
                        <i className="fab fa-linkedin-in"></i>
                    </button>

                    <button className="btn" onClick={() => this.onIconClickHandler('github')}>
                        <i className="fab fa-github"></i>
                    </button>

                    <button className="btn" onClick={() => this.onIconClickHandler('resume')}>
                        <i className="fas fa-file-pdf"></i>
                    </button>
                </div>
            </AnimatedGradientBG>
        );
    }
}

export default Intro;