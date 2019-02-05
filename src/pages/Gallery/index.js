import React      from 'react';
import Header     from '../../components/Header';
import Navigation from '../../components/Navigation';
import GalleryContent from '../Gallery/content';
import './Gallery.css';

const Gallery = () => (
  <>
    <Header/>
    <div className={'panel'}>
      <Navigation/>
      <GalleryContent/>
    </div>
  </>
);

export default Gallery;
