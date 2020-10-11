import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Slogan from './components/Slogan/Slogan';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js'

const particlesOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends React.Component {
  render = () => {
    return (
        <div className = "App">
            <Particles className={'particles'} params={particlesOpt} />
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
  };
}



export default App;