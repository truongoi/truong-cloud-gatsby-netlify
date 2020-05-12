import React from 'react';
import styles from './Toggle.module.scss';

const Toggle = (props) => {
  return (
    <div className={[styles['Toggle'], props.isOpen ? styles['active'] : null].join(' ')} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Toggle;
