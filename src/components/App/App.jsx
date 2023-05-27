import React, { Component } from 'react';
import { fetchData } from 'api';

// ########################################

import Searchbar from 'components/Searchbar/Searchbar';
import { Wrapper } from './App.styled';
import ImageGallery from 'components/ImageGallery/ImageGallery';

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

    if (this.state.page > 1) {
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
    const { getQuery } = this;
    const { query, images, error, isLoading } = this.state;

    return (
      <Wrapper>
        <Searchbar onSubmit={getQuery} />
        {query ? `Current query is "${query}"` : 'No query yet'}

        {isLoading && <div>isLoading</div>}
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <ImageGallery images={images} isLoading={isLoading} />
      </Wrapper>
    );
  }
}
