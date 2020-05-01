// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <h4 className={styles['author__name']}>{author.name}</h4>
      <p className={styles['author__bio']}>
        {author.bio}
      </p>
    </div>
  );
};

export default Author;
