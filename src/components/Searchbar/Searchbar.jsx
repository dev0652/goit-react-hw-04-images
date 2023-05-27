import { Header } from './Searchbar.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';

// ########################################

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit} />
    </Header>
  );
};

export default Searchbar;

// ####### PropTypes ######################

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
