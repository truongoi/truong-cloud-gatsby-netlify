// @flow strict
import React, { useState } from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import Toggle from './Toggle/Toggle';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  const [menuState, setMenuState] = useState(false);
  
  const toggleMenuHandler = () => {
    const currState = menuState;
    setMenuState(!currState);
  };

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Toggle clicked={toggleMenuHandler} isOpen={menuState}></Toggle>
        <Menu menu={menu} isOpen={menuState} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
