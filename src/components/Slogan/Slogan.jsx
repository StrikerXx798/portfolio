import React from 'react';
import styles from './Slogan.module.css';


const Slogan = (props) => {
    return (
        <div className = {styles.slogan}>
            <div className = {styles.container}>
                <div className = {styles.sloganText}>
                <span>
                    I consider options for remote work
                </span>
                </div>
                <div className = {styles.button}>
                    <button>
                        Recruit Me
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Slogan;