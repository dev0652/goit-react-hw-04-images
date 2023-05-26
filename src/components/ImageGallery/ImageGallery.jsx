import React, { Component } from 'react';
// import { ImageCardList } from './ImageGallery.styled';

import { fetchImages } from 'api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageCardList } from './ImageGallery.styled';

// ########################################

class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    error: null,
    isLoading: false,
  };

  // >>>>> Lifecycle
  async componentDidMount() {
    const { query } = this.props;
    const { page } = this.state;

    try {
      // this.setState({ isLoading: true });
      const images = await fetchImages(page, query);
      this.setState({ images });
    } catch (error) {
      this.setState({
        error: "Couldn't fetch images. Please reload the page",
      });
      // alert(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  // >>>>> Methods

  // >>>>> Rendering
  render() {
    // const { query } = this.props;
    const { images, error } = this.state;

    return (
      <>
        {error && <div>{error}</div>}

        <ImageCardList>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              thumb={webformatURL}
              large={largeImageURL}
              alt={tags}
            />
          ))}
        </ImageCardList>
      </>
    );
  }
}

export default ImageGallery;
