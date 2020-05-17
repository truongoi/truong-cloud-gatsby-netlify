// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  copyright: string,
  isOpen?: boolean
};

const Copyright = ({ copyright, isOpen }: Props) => (
  <div className={[styles['copyright'], isOpen ? styles['active'] : null].join(' ')}>
    {copyright}
  </div>
);

export default React.memo(Copyright);
