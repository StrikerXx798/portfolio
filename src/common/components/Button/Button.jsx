import React from 'react';
import styles from './Button.module.scss';

class Button extends React.Component {
    render = () => {
        return (
            <a href={this.props.ghPages} target='_blank' className={styles.button} style={this.props.style}>
                {this.props.state.buttonTitle}
            </a>
        );
    }
}

export default Button;