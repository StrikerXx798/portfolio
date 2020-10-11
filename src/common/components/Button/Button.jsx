import React from 'react';
import styles from './Button.module.scss';

class Button extends React.Component {
    render = () => {
        return (
            <a href={this.props.ghPages} target='_blank' className={styles.link}>
                <button className={styles.button} style={this.props.style}
                        type={this.props.state.buttonType}>
                    {this.props.state.buttonTitle}
                </button>
            </a>
        );
    }
}

export default Button;