import React, { Component } from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

// ########################################

export default class ImageGalleryItem extends Component {
  state = {
    clickedImageId: null,
  };

  // >>>>> Methods
  handleClick = event => {
    const clickedImageId = event.target.id;

    this.setState({ clickedImageId });
  };

  // >>>>> Rendering
  render() {
    const { thumb, alt } = this.props;
    const { handleClick } = this;

    return (
      <GalleryItem>
        <GalleryImage
          src={thumb}
          alt={alt}
          loading="lazy"
          height="165"
          onClick={handleClick}
        />
      </GalleryItem>
    );
  }
}
