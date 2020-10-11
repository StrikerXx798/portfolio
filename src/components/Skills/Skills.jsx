import React from 'react';
import styles from './Skills.module.scss';
import Skill from './Skill/Skill';
import Title from "../../common/components/Title/Title";
import reactIcon from '../../assets/react_icon.svg';
import cssIcon from '../../assets/css_icon.svg';
import jsIcon from '../../assets/js_icon.svg';
import reduxIcon from '../../assets/redux_icon.svg';
import tsIcon from '../../assets/ts_icon.svg';
import Fade from 'react-reveal/Fade'

class Skills extends React.Component {
    state = {
        title: "Мои навыки",
        skill: [
            {title: 'CSS3', icon: cssIcon, description: "Adaptive design, After/Before, Bootstrap 4, Flexbox, Grid, Sass"},
            {title: 'JavaScript', icon: jsIcon, description: "ES5/ES6, Prototype, Promises, Async/Await, Event Loop, Local Storage"},
            {title: 'React', icon: reactIcon, description: "Class components, High Order Components, React.Hooks, Life Cycle Method, React-Router, Css-modules, FLUX, REST API, Material UI, Unit-Tests, Storybook"},
            {title: 'Redux', icon: reduxIcon, description: "Actions, Reducers, Middleware, Redux-thunk, Redux Dev Tools Redux-ducks"},
            {title: 'TypeScript', icon: tsIcon, description: "Basic Types, Generics"},
        ]
    }

    render = () => {
        let skill = this.state.skill.map(s => {
            return <Skill title={s.title} icon={s.icon} description={s.description}/>
        })

        return (
            <div className = {styles.skills}>
                <Fade bottom>
                    <div className={styles.container}>
                        <Title title={this.state.title}/>
                        <div className={styles.skillSet}>
                            {skill}
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Skills;