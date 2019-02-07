import React, { Component } from 'react';
import GalleryImage         from '../../components/GalleryImage';

const fakeImages = [
  { id: 1, url: '../images/gallery/load-image.png', alt: 'load image' },
  { id: 2, url: '../images/gallery/136562-Beautiful-Butterfly.jpg', alt: 'some alt' },
  { id: 3, url: '../images/gallery/acrylic2.jpg', alt: 'some alt' },
  { id: 4, url: '../images/gallery/Acrylic1.jpg', alt: 'some alt' },
  { id: 5, url: '../images/gallery/beautiful-beautiful-flowers-bird-1133957.jpg', alt: 'some alt' },
  { id: 6, url: '../images/gallery/beautiful-calm-clouds-206359.jpg', alt: 'some alt' },
  { id: 7, url: '../images/gallery/beautiful-wallpaper-2-beautiful-pictures-38538867-2560-1600.jpg', alt: 'some alt' },
  { id: 8, url: '../images/gallery/dandelion-445228__340.jpg', alt: 'some alt' },
  { id: 9, url: '../images/gallery/f4a8ac1a2d768fdfbc73dd35f93a9292.jpg', alt: 'some alt' },
  { id: 10, url: '../images/gallery/fa1f7fb8f7e24f43ca89a7f940484669.jpg', alt: 'some alt' },
  { id: 11, url: '../images/gallery/Many-Flowers-beautiful-nature-22639508-936-623.jpg', alt: 'some alt' },
  { id: 12, url: '../images/gallery/pencil1.jpg', alt: 'some alt' },
  { id: 13, url: '../images/gallery/pencil2.jpg', alt: 'some alt' },
  { id: 14, url: '../images/gallery/tree-in-sunset-main.jpg', alt: 'some alt' },
  { id: 15, url: '../images/gallery/watercolor1.jpg', alt: 'some alt' },
  { id: 16, url: '../images/gallery/watercolor2.jpg', alt: 'some alt' },
  { id: 17, url: '../images/gallery/Acrylic1.jpg', alt: 'some alt' },
  { id: 18, url: '../images/gallery/beautiful-beautiful-flowers-bird-1133957.jpg', alt: 'some alt' },
  { id: 19, url: '../images/gallery/beautiful-calm-clouds-206359.jpg', alt: 'some alt' },
  { id: 20, url: '../images/gallery/beautiful-wallpaper-2-beautiful-pictures-38538867-2560-1600.jpg', alt: 'some alt' },
  { id: 21, url: '../images/gallery/dandelion-445228__340.jpg', alt: 'some alt' },
  { id: 22, url: '../images/gallery/f4a8ac1a2d768fdfbc73dd35f93a9292.jpg', alt: 'some alt' },
  { id: 23, url: '../images/gallery/fa1f7fb8f7e24f43ca89a7f940484669.jpg', alt: 'some alt' },
];

class GalleryContent extends Component {


  render() {
    return (
      <div className={'gallery'}>
        <h1 className={'gallery-h1'}>Галерея</h1>
        <div className={'gallery-content'}>
          {fakeImages.map(item => (
            <GalleryImage url={item.url} alt={item.alt} key={item.id} className={'gallery-item'}/>),
          )}
        </div>
      </div>
    );
  }
};

export default GalleryContent;
