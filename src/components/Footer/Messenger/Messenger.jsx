import React from 'react';
import styles from './Messenger.module.css';


class Messenger extends React.Component {
    render = () => {
        return (
            <div className={styles.messenger}>
                <a href={this.props.href}>
                    <img src={this.props.icon} alt=""/>
                </a>
            </div>
        );
    }
}



export default Messenger;