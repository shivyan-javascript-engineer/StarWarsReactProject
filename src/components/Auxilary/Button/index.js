import React from 'react';
import styles from './button.module.scss';



function Button (props){
    return (
        <button className={styles.submitButton} type={props.type} >{props.label}</button>
    )
}



export default Button