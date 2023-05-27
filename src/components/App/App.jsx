import React, { Component } from 'react';

import { fetchData } from 'api';

// ########################################

import Searchbar from 'components/Searchbar/Searchbar';
import { Wrapper } from './App.styled';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { PixabayLogo } from 'components/PixabayLogo/PixabayLogo';
import { Loader } from 'components/Loader/Loader';

// ########################################

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalHits: null,
    isLoading: false,
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

  getQuery = query => {
    this.setState({ query });
  };

  resetState = () => {
    this.setState({ page: 1, images: [], totalHits: null, error: null });
  };

  incrementPage = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      console.log('Page:', this.state.page)
    );
  };

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

  // >>>>> Rendering

  render() {
    const { getQuery, incrementPage } = this;
    const { query, images, totalHits, error, isLoading } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={getQuery} />

        {!query && <PixabayLogo />}

        {isLoading && <Loader isLoading={isLoading} />}

        {error && <div style={{ color: 'red' }}>{error}</div>}
        {/* {images.length > 0 && images.length < totalHits && !isLoading && (
          <ImageGallery images={images} isLoading={isLoading} />
        )} */}
        <ImageGallery images={images} />

        {images.length > 0 && images.length < totalHits && !isLoading && (
          <Button onClick={incrementPage} isLoading={isLoading} />
        )}
      </Wrapper>
    );
  }
}
