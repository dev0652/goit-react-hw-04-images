import { Header } from './Searchbar.styled';
import SearchForm from 'components/SearchForm/SearchForm';

// ########################################

const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit} />
    </Header>
  );
};

export default Searchbar;
