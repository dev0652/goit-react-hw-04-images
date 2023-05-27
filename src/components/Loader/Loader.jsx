import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        // color="#3f51b5"
        color="SteelBlue"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isLoading}
      />
    </LoaderWrapper>
  );
};

export default Loader;

// ####### PropTypes ######################

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
