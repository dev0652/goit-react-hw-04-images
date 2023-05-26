import React, { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <GalleryItem>
        <GalleryImage src="" alt="" />
      </GalleryItem>
    );
  }
}
