import React, { Component } from 'react';

import { fetchData } from 'api';

// ########################################

import Searchbar from 'components/Searchbar/Searchbar';
import { Wrapper } from './App.styled';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { PixabayLogo } from 'components/PixabayLogo/PixabayLogo';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

// ########################################

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: null,
    isLoading: false,
    showModal: false,
    largeImageLink: null,
    largeImageAlt: null,
  };

  // >>>>> Lifecycle

  async componentDidUpdate(_, prevState) {
    // console.log('this.query: ', this.state.query);
    // console.log('prev.query: ', prevState.query);
    // console.log(
    //   'Queries matching? :',
    //   prevState.query !== this.state.query ? 'No' : 'Yes'
    // );

    if (this.state.query !== prevState.query) {
      this.resetState();
      await this.fetchImages();
    }

    // if (this.state.images.length > prevState.images.length) {
    //   console.log(
    //     'Different images.length? ',
    //     this.state.images.length > prevState.images.length
    //   );

    if (this.state.page > prevState.page) {
      await this.fetchImages();
    }
  }

  // >>>>> Methods

  // Get search query from form
  getQuery = query => {
    this.setState({ query });
  };

  // Reset current state to defaults
  resetState = () => {
    this.setState({ page: 1, images: [], totalHits: null, error: null });
  };

  // Increment page count (Load More button)
  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // Fetch images from server, update state
  fetchImages = async () => {
    const { page, query } = this.state;

    try {
      this.setState({ isLoading: true });

      const response = await fetchData(page, query);
      const { hits, totalHits } = response.data;

      if (!totalHits) {
        throw new Error('Sorry, there are no images matching your query.');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits,
      }));
      //
    } catch ({ message }) {
      this.setState({ error: message });
      console.error(message);
      //
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Handle clicks on image thumbnails
  handleImageClick = (link, alt) => {
    this.setState({
      largeImageLink: link,
      largeImageAlt: alt,
      showModal: true,
    });

    console.log('clicked!');
  };

  // Modal пуньк-пуньк
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // >>>>> Rendering

  render() {
    const { getQuery, incrementPage, toggleModal } = this;
    const {
      query,
      images,
      totalHits,
      error,
      isLoading,
      showModal,
      largeImageLink,
      largeImageAlt,
    } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={getQuery} />

        {!query && <PixabayLogo />}

        {isLoading && <Loader isLoading={isLoading} />}

        {error && <div style={{ color: 'red' }}>{error}</div>}

        <ImageGallery images={images} />

        {showModal && (
          <Modal
            link={largeImageLink}
            alt={largeImageAlt}
            onClose={toggleModal}
          />
        )}

        {images.length > 0 && images.length < totalHits && !isLoading && (
          <Button onClick={incrementPage} isLoading={isLoading} />
        )}
      </Wrapper>
    );
  }
}
