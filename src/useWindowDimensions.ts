import { useEffect, useState } from 'react';

const TABLET_BREAKPOINT = 992;

export const useWindowDimensions = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth < TABLET_BREAKPOINT
  );

  useEffect(() => {
    const onWindowResize = () => {
      if (window.innerWidth > TABLET_BREAKPOINT) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return isMobile;
};
