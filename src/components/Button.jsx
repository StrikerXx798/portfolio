import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
    render = () => {
        return (
            <button className={styles.button}
                    type={this.props.state.buttonType}>
                {this.props.state.buttonTitle}
            </button>
        );
    }
}

export default Button;