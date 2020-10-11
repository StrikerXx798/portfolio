import React from 'react';
import styles from './Projects.module.scss';
import Project from './Project/Project';
import Title from "../../common/components/Title/Title";
import Fade from 'react-reveal/Fade'
import counterIMG from '../../assets/counter.png'
import socialIMG from '../../assets/socialnetimg.jpg'
import todoIMG from '../../assets/todoimg.jpg'

class Projects extends React.Component {
    state ={
        title: "Мои проекты",
        project: [
            {title: 'To Do List', projectImg: counterIMG, description:'', ghPages:''},
            {title: 'Counter', projectImg:todoIMG, description:'', ghPages:'https://StrikerXx798.github.io/counter/'},
            {title: 'Social Network', projectImg:socialIMG, description:'', ghPages:''},
        ]
    }

    render = () => {
        let project = this.state.project.map(p => {
            return <Project title={p.title} projectImg={p.projectImg} description={p.description} ghPages={p.ghPages}/>
        })
        return (
            <div id='projects' className = {styles.projects}>
                <Fade bottom>
                    <div className = {styles.container}>
                        <Title title={this.state.title}/>
                        <div className = {styles.projectsSet}>
                            {project}
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}



export default Projects;