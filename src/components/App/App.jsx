import React, { Component } from 'react';
import { fetchData } from 'api';
import toast from 'react-hot-toast';

// ###### Components in App ######################

import Searchbar from 'components/Searchbar';
import { Wrapper } from './App.styled';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import PixabayLogo from 'components/PixabayLogo';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

// ###### App ####################################

class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: null,
    isLoading: false,
    error: null,

    showModal: false,
    largeImageLink: '',
    largeImageAlt: '',
  };

  // >>>>> Lifecycle

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      //
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
        // console.warn(message);
        toast.error(message);

        //
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  // >>>>> Methods

  // Get the query string from the search box + reset current state
  getNewQuery = query => {
    this.setState({ query, images: [], page: 1 });
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

  // Handle пуньк on image thumbnails
  handleImageClick = (link, alt) => {
    this.setState({
      largeImageLink: link,
      largeImageAlt: alt,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageLink: '', largeImageAlt: '' });
  };

  // >>>>> Rendering

  render() {
    const { getNewQuery, incrementPage, closeModal, handleImageClick } = this;
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
        <Searchbar onSubmit={getNewQuery} />

        {(!query || !totalHits) && <PixabayLogo />}

        {isLoading && <Loader isLoading={isLoading} />}

        {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}

        <ImageGallery images={images} clickHandler={handleImageClick} />

        {showModal && (
          <Modal
            link={largeImageLink}
            alt={largeImageAlt}
            onClose={closeModal}
          />
        )}

        {images.length > 0 && images.length < totalHits && !isLoading && (
          <Button onClick={incrementPage} />
        )}
      </Wrapper>
    );
  }
}

export default App;
