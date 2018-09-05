import React from 'react';
import classes from './Modal.css'

export default (props) => {
    const style = {
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };
    return (
        <div className={classes.Modal} style={style}>
            {props.children}
        </div>
    );
}