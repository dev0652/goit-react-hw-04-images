import { ReactComponent as Logo } from '../../icons/Pixabay-logo.svg';
import { LogoWrapper } from './PixabayLogo.styled';

const PixabayLogo = () => {
  return (
    <LogoWrapper>
      <Logo fill="rgba(176, 196, 222, 0.2)" />
    </LogoWrapper>
  );
};

export default PixabayLogo;
