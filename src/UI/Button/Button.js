import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className} ${classes.profile_Button}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
