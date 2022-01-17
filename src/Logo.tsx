import GoldLogo from './assets/logo/logo-gold-300.png';
import BlackLogo from './assets/logo/logo-black-300.png';
import { useWindowDimensions } from './useWindowDimensions';

export const Logo = () => {
  const isMobile = useWindowDimensions();
  return (
    <>
      {isMobile ? (
        <img src={GoldLogo} alt="Logo" />
      ) : (
        <img src={BlackLogo} alt="Logo" />
      )}
    </>
  );
};
