import React from 'react';
import styles from './Project.module.css';


const Project = (props) => {
    return (
        <div className = {styles.project}>
            <div className = {styles.projectImg}>
                <div className = {styles.button}>
                    <button>Watch</button>
                </div>
            </div>
            <div className = {styles.descriptionProject}>
                <span>
                    Project Name
                </span>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, fugit illo laborum repellat sit ut.
                </div>
            </div>
        </div>
    );
}


export default Project;