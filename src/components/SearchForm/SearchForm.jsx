import { useState } from 'react';
import PropTypes from 'prop-types';

import toast from 'react-hot-toast';

import { Button, Form, Input } from './SearchForm.styled';
import { ReactComponent as MagnifyingGlass } from '../../icons/search.svg';

// ########################################

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      toast.error('Your search query is empty');
    } else {
      onSubmit(normalizedQuery);
    }

    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit" aria-label="Search">
        <MagnifyingGlass width="24" height="24" />
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

// ####### PropTypes ######################

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
