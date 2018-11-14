import React, { Component } from 'react';
import './App.scss';
import { push as Menu } from 'react-burger-menu';
import scrollToComponent from 'react-scroll-to-component';

import MenuBtn from './components/ui/menu/MenuBtn';
import SectionHeader from './components/ui/SectionHeader';
import Intro from './containers/intro/Intro';
import About from './containers/about/About';
import Projects from './containers/projects/Projects';
import Experiences from './containers/experiences/Experiences';
import Skills from './containers/skills/Skills';

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          right width={300}
          customBurgerIcon={<MenuBtn />}
          
        >
          <div
            id="top" className="menu-item"
            onClick={() => scrollToComponent(this.Intro, { offset: 0, align: 'top', duration: 1000 })}
          >
            <i className="fas fa-angle-double-up"></i>
            <div>Back To Top</div>
          </div>
          <div
            id="about" className="menu-item"
            onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1000 })}
          >
            <i className="fas fa-user-tie"></i>
            <div>About</div>
          </div>
          <div
            id="project" className="menu-item"
            onClick={() => scrollToComponent(this.Projects, { offset: 0, align: 'top', duration: 1000 })}
          >
            <i className="fas fa-table"></i>
            <div>Projects</div>
          </div>
          <div
            id="experiences" className="menu-item"
            onClick={() => scrollToComponent(this.Experiences, { offset: 0, align: 'top', duration: 1000 })}
          >
            <i className="fas fa-briefcase"></i>
            <div>Experiences</div>
          </div>
          <div
            id="skills" className="menu-item"
            onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 1000 })}
          >
            <i className="fas fa-code"></i>
            <div>Skills</div>
          </div>
        </Menu>
        <main id='page-wrap'>
          <section ref={(section) => { this.Intro = section; }} >
            <Intro />
          </section>
          <section ref={(section) => { this.About = section; }} >
            <SectionHeader title="ABOUT" />
            <About />
          </section>
          <section ref={(section) => { this.Projects = section; }}>
            <SectionHeader title="PROJECTS" />
            <Projects />
          </section>
          
          <section ref={(section) => { this.Experiences = section; }}>
            <SectionHeader title="EXPERIENCES" />
            <Experiences />
          </section>
          
          <section ref={(section) => { this.Skills = section; }}>
            <SectionHeader title="SKILLS" />
            <Skills />
          </section>
        </main>
      </div>
    );
  }
}

// const styles = {
//   bmBurgerButton: {
//     position: 'fixed',
//     width: '100%',
//     height: '100%',
//     left: '36px',
//     top: '36px'
//   },
//   bmCrossButton: {
//     height: '24px',
//     width: '24px'
//   },
//   bmCross: {
//     background: '#bdc3c7'
//   },
//   bmMenu: {
//     background: '#373a47',
//     padding: '2.5em 1.5em 0',
//     fontSize: '1.15em'
//   },
//   bmItemList: {
//     color: '#b8b7ad',
//     padding: '0.8em'
//   },
//   bmItem: {
//     display: 'flex',
//     flexFlow: 'column'
//   },
// }

export default App;
