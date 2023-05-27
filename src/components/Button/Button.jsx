import { ButtonWrapper, LoadMoreBtn } from './Button.styled';

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
