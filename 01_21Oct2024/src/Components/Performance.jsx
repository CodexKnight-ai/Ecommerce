import { useEffect } from 'react';

function Performance() {
  useEffect(() => {
    // Preload critical images
    const imagesToPreload = ['/image.png', '/heroBg.jpeg'];
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Report Web Vitals
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getLCP }) => {
        getCLS(console.log);
        getFID(console.log);
        getLCP(console.log);
      });
    }
  }, []);

  return null;
}

export default Performance; 