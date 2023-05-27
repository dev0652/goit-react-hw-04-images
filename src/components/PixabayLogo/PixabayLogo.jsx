import { ReactComponent as Logo } from '../../icons/Pixabay-logo.svg';
import { LogoWrapper } from './PixabayLogo.styled';

export const PixabayLogo = () => {
  return (
    <LogoWrapper>
      <Logo fill="lightgray" />
    </LogoWrapper>
  );
};
