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

  async componentDidUpdate(prevProps, prevState) {
    console.log('this.query: ', this.state.query);
    console.log('prev.query: ', prevState.query);
    console.log(
      'Queries matching? :',
      prevProps.query !== this.props.query ? 'No' : 'Yes'
    );

    if (this.state.query !== prevState.query) {
      // this.resetState();
      await this.fetchImages();
    }
    // if (this.state.images.length > prevState.images.length) {
    //   console.log(
    //     'Different images.length? ',
    //     this.state.images.length > prevState.images.length
    //   );
    // this.fetchImages();
    // }
  }

  // >>>>> Methods

  getQuery = query => {
    this.setState({ query });
  };

  resetState = () => {
    this.setState({ page: 1, images: [], totalHits: null });
  };

  fetchImages = async () => {
    const { page, query } = this.state;

    try {
      this.setState({ isLoading: true });

      const response = await fetchData(page, query);
      const { hits, totalHits } = response.data;

      // if (!totalHits) {
      //   throw new Error('Sorry, there are no images matching your query.');
      // } else {
      //   this.setState(prevState => ({
      //     images: [...prevState.images, ...hits],
      //     totalHits,
      //     page: prevState.page + 1,
      //   }));
      // }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits,
      }));
      //
    } catch (error) {
      // this.setState({
      //   // error: "Couldn't fetch images. Please reload the page",
      //   error,
      // });
      //
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // >>>>> Rendering

  render() {
    const {
      getQuery,
      state: { query, images },
    } = this;

    return (
      <Wrapper>
        <Searchbar onSubmit={getQuery} />
        {query ? `Current query is "${query}"` : 'No query yet'}

        <ImageGallery images={images} />
      </Wrapper>
    );
  }
}
