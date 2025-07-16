import { useState, useEffect } from 'react';
import themeConfig from './themeConfig';

export default function useWidth () {

  // states
  const [width, setWidth] = useState(window?.innerWidth);

  // breakpoints
  const breakpoints = themeConfig.breakpoints;

  // resize window size and set width by useEffect
  useEffect(() => {
    const handleResize = () => {
      setWidth(window?.innerWidth);
    };
    window?.addEventListener('resize', handleResize);
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, breakpoints };
}
