import React, { Component } from 'react';
import SectionHeader from './components/ui/SectionHeader';
import Intro from './containers/intro/Intro';
import About from './containers/about/About';
import Projects from './containers/projects/Projects';
import Experiences from './containers/experiences/Experiences';
import Skills from './containers/skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <SectionHeader title="ABOUT" />
        <About />
        <SectionHeader title="PROJECTS" />
        <Projects />
        <SectionHeader title="EXPERIENCES" />
        <Experiences />
        <SectionHeader title="SKILLS" />
        <Skills />
      </div>
    );
  }
}

export default App;
