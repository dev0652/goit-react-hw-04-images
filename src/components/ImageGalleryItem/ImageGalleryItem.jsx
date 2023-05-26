import React, { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    // {
    //   webformatURL,
    //   largeImageURL,
    //   tags,
    // }
    const {
      data: { webformatURL, tags },
    } = this.props;

    return (
      <GalleryItem>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          loading="lazy"
          height="165"
        />
      </GalleryItem>
    );
  }
}
