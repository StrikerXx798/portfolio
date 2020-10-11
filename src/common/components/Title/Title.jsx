import React from 'react';
import styles from './Title.module.scss';

class Title extends React.Component {
    render = () => {
        return (
            <div className={styles.title}>
                <h2 className={styles.text}>{this.props.title}</h2>
                <div className={styles.line}></div>
            </div>
        );
    }
}


export default Title;