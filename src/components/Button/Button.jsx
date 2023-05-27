import { ButtonWrapper, LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick, isLoading }) => {
  return (
    <ButtonWrapper>
      <LoadMoreBtn type="button" onClick={onClick} disabled={isLoading}>
        Load more
      </LoadMoreBtn>
    </ButtonWrapper>
  );
};

export default Button;

// ####### PropTypes ######################

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
