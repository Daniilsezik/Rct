import React from 'react';
import classes from "./styles/MyInput.module.css";

const MyInput = (props) => {
    return (
        <input className={classes.myInput} type="text" {...props} />
    );
};

export default MyInput;