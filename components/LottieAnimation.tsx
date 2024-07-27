'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  animationUrl: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationUrl }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationUrl,
      });

      return () => animation.destroy(); // Clean up animation on component unmount
    }
  }, [animationUrl]);

  return (
    <div
      ref={containerRef}
      className="opacity-50 absolute bottom-0 left-1/2 transform -translate-x-1/2"
      style={{ width: '100%', height: 'auto' }} // Ajusta el tamaño según sea necesario
    />
  );
};

export default LottieAnimation;