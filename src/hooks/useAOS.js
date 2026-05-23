import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAOS = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);
};
