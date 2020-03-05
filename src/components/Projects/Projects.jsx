import React from 'react';
import styles from './Projects.module.css';
import Project from './Project/Project';


const Projects = (props) => {
    return (
        <div className = {styles.projects}>
            <div className = {styles.container}>
                <div className={styles.heading}>
                    <span>My Projects</span>
                </div>
                <div className = {styles.projectsSet}>
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
}


export default Projects;