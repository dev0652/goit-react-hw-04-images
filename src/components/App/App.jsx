import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
import { Wrapper } from './App.styled';

// ########################################

export class App extends Component {
  state = {
    query: '',
  };

  // >>>>> Lifecycle

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.query);
  }

  // >>>>> Methods

  getQuery = query => {
    this.setState({ query });
  };

  // >>>>> Rendering

  render() {
    const {
      getQuery,
      state: { query },
    } = this;

    return (
      <Wrapper>
        <Searchbar onSubmit={getQuery} />
        {/* <div>Query: {this.state.query}</div> */}

        {query && <ImageGallery query={query} />}
      </Wrapper>
    );
  }
}
