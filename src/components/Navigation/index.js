import React                from 'react';
import './Navigation.css';
import { Link }             from 'react-router-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Pages</Link></li>
      </ul>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFolder}/>Menu</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>All menu</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Add menu</Link></li>
      </ul>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFolder}/>Sell</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Order</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Catalog</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Buyer list</Link></li>
      </ul>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFolder}/>Comments</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>All comments</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Add comment</Link></li>
      </ul>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFolder}/>Clients</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>All clients</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Add client</Link></li>
      </ul>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFolder}/>Courses</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>All courses</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>Add course</Link></li>
      </ul>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFolder}/>Events</Link></li>
        <li className={'menu-item'}><Link to={'#'}><FontAwesomeIcon icon={faFile}/>All events</Link></li>
        <li className={'menu-item'}><Link to={'/admin'}><FontAwesomeIcon icon={faFile}/>Add event</Link></li>
      </ul>
      <ul className={'menu-list'}>
        <li className={'menu-item'}><Link to={'/admin/gallery'}><FontAwesomeIcon icon={faFile}/>Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;


