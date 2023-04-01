import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${props.count>0?classes.card:classes.card_lengthZero} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
