import React, { Component } from 'react';

import {
  fetchData,
  // imagesPerPage
} from 'api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageCardList } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';

// ########################################

class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    totalHits: null,
    error: null,
    isLoading: false,
  };

  // >>>>> Lifecycle
  async componentDidMount() {
    const { totalHits } = this.state;
    // 1
    // await this.fetch();

    // 2
    console.log('totalHits', totalHits);

    // if (images.length > imagesPerPage * page) {
    // this.incrementPage();
    // showButton
    // }
  }

  async componentDidUpdate(prevProps, prevState) {
    // const { totalHits } = this.state;

    // if (totalHits > imagesPerPage) {
    //   console.log('Loaded');
    //   // this.incrementPage();
    // }

    if (prevProps.query !== this.props.query) {
      this.resetState();
      this.fetch();
    }

    // if (this.state.images.length > prevState.images.length) {
    //   this.fetch();
    // }
  }

  // >>>>> Methods
  fetch = async () => {
    const { query } = this.props;
    const { page } = this.state;

    try {
      // this.setState({ isLoading: true });
      const response = await fetchData(page, query);
      const { hits, totalHits } = response.data;
      // console.log(response.data);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits,
        page: prevState.page + 1,
      }));

      // this.setState({
      //   images: hits,
      //   totalHits,
      // });
    } catch (error) {
      this.setState({
        error: "Couldn't fetch images. Please reload the page",
      });
      // alert(error);
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  // incrementPage = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  resetState = () => {
    this.setState({ page: 1, images: [], totalHits: null });
  };

  // >>>>> Rendering
  render() {
    // const { query } = this.props;
    const { images, error, totalHits } = this.state;

    return (
      <>
        {images.length > 0 && (
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
        )}

        {error && <div>{error}</div>}

        {images.length > 0 && images.length < totalHits && (
          <Button onClick={this.fetch} />
        )}
      </>
    );
  }
}

export default ImageGallery;
