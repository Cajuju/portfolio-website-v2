import React, { Component } from 'react';
import './About.scss';

class About extends Component {
    render () {
        return (
            <div className='about'>
                <p>
                Brian Robert Cajulis is a web/mobile developer who specializes in front end development and is based in Los Angeles, CA.
                Brian focuses on creating applications that function well according to their specifications and have a fully responsive interface that looks consistent on a wide range of devices.
                He began pursuing a career in software development while attending <label onClick={() => window.open("https://www.apu.edu/", '_blank')} style={{textDecoration: 'underline'}}>Azusa Pacific University</label>, and he graduated with BS in Computer Science on May 2018. During his college career, he was part of the first computer science action team from his university which traveled to Namibia, South Africa.
                Whilst there, he assisted students and professors from <label onClick={() => window.open('http://www.nust.na/', '_blank')} style={{textDecoration: 'underline'}}>Namibia University of Science and Technology</label> to create a health informatics system for public and private hospitals.
                His experiences in Namibia concreted his passion for software development where then after he dedicated time between classes to challenge and to better his understanding of web and mobile development.
                </p>
                <p>Brian is currently searching for job opportunities as a front end developer for web and/or mobile applications. Email me at <a href="mailto:brianrobertcajulis@yahoo.com" target="_top"> brianrobertcajulis@yahoo.com</a> to connect.</p>
            </div>
        );
    }
}

export default About;