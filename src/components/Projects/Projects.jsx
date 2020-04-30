import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project';
import BlockTitle from "../BlockTitle";
import Skill from "../Skills/Skill/Skill";

class Projects extends React.Component {
    state ={
        title: "Мои проекты",
        project: [
            {title: 'To Do List'},
            {title: 'Counter'},
            {title: 'Social Network'},
        ]
    }

    render = () => {
        let project = this.state.project.map(p => {
            return <Project title={p.title}/>
        })
        return (
            <div className = {styles.projects}>
                <div className = {styles.container}>
                    <BlockTitle title={this.state.title}/>
                    <div className = {styles.projectsSet}>
                        {project}
                    </div>
                </div>
            </div>
        );
    }
}



export default Projects;