import React from 'react';
import styles from './BlockTitle.module.css';

class BlockTitle extends React.Component {
    render = () => {
        return (
            <div className={styles.blockTitle}>
                <h2 className={styles.title}>{this.props.title}</h2>
                <div className={styles.line}/>
            </div>
        );
    }
}


export default BlockTitle;