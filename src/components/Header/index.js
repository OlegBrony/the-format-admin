import React                    from 'react';
import { Image }                from 'semantic-ui-react';
import { FontAwesomeIcon }      from '@fortawesome/react-fontawesome';
import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
  return (
    <header>
      <Image src="/images/logo.svg" alt="" className={'header-item header-image'}/>
      <a href="https://google.com" className={'header-item'}>
        <FontAwesomeIcon icon={faEdit}/><p>Edit accaunt</p>
      </a>
      <a href="https://google.com" className={'header-item'}>
        <FontAwesomeIcon icon={faSignOutAlt}/><p>Log out</p>
      </a>
    </header>
  );
};

export default Header;
