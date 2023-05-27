import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

// import { Formik } from 'formik';

import { Button, Form, Input, Label } from './SearchForm.styled';

// ########################################

class SearchForm extends Component {
  state = {
    query: '',
  };

  // >>>>> Methods

  handleChange = event => {
    event.preventDefault();
    const input = event.target.value;
    this.setState({ query: input });
  };

  handleSubmit = event => {
    event.preventDefault();
    const normalizedQuery = this.state.query.trim().toLowerCase();

    if (!normalizedQuery) {
      toast.error('Your search query is empty');
      this.formReset();
      return;
    }

    this.props.onSubmit(normalizedQuery);
    this.formReset();
  };

  formReset = () => {
    this.setState({ query: '' });
  };

  // >>>>> Rendering

  render() {
    const {
      handleChange,
      handleSubmit,
      state: { query },
    } = this;

    return (
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </Form>
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
