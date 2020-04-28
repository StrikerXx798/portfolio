import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project';

class Projects extends React.Component {
    state ={
        title: "Мои проекты"
    }

    render = () => {
        return (
            <div className = {styles.projects}>
                <div className = {styles.container}>
                    <span className={styles.heading}>{this.state.title}</span>
                    <div className = {styles.projectsSet}>
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </div>
            </div>
        );
    }
}



export default Projects;