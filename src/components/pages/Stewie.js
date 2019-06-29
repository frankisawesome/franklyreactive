import React from 'react';
import { Jumbo } from '../reusables/Jumbo';
import { ImageGallery } from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const Stewie = (props) => {
    const images = [
        {
          original: 'http://lorempixel.com/1000/600/nature/1/',
          thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        }
      ];

    return(
        <div>
            <ImageGallery items={images} />
        </div>
    )
}