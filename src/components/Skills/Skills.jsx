import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill/Skill';
import BlockTitle from "../BlockTitle";
import reactIcon from '../../assets/untitled(5).svg';
import htmlIcon from '../../assets/untitled(7).svg';
import cssIcon from '../../assets/untitled(8).svg';
import jsIcon from '../../assets/untitled(9).svg';
import reduxIcon from '../../assets/untitled(10).svg';
import tsIcon from '../../assets/untitled(3).svg';

class Skills extends React.Component {
    state ={
        title: "Мои навыки",
        skill: [
            {title: 'HTML5', icon: htmlIcon},
            {title: 'CSS3', icon: cssIcon},
            {title: 'JavaScript', icon: jsIcon},
            {title: 'React', icon: reactIcon},
            {title: 'Redux', icon: reduxIcon},
            {title: 'TypeScript', icon: tsIcon},
            ]
    }

    render = () => {
        let skill = this.state.skill.map(s => {
            return <Skill title={s.title} icon={s.icon}/>
        })

        return (
            <div className = {styles.skills}>
                <div className={styles.container}>
                    <BlockTitle title={this.state.title}/>
                    <div className={styles.skillSet}>
                        {skill}
                    </div>
                </div>
            </div>
        );
    }
}



export default Skills;