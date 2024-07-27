'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface HexagonLottieProps {
  animationUrl: string;
}

const HexagonLottie: React.FC<HexagonLottieProps> = ({ animationUrl }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const directionRef = useRef<1 | -1>(1); // 1 for forward, -1 for backward

  useEffect(() => {
    if (containerRef.current) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false, // Set loop to false to control looping manually
        autoplay: true,
        path: animationUrl,
      });

      const handleComplete = () => {
        // Reverse the direction when the animation completes
        directionRef.current = directionRef.current === 1 ? -1 : 1;
        animation.setDirection(directionRef.current);
        animation.play();
      };

      animation.addEventListener('complete', handleComplete);

      return () => {
        animation.removeEventListener('complete', handleComplete);
        animation.destroy(); // Clean up animation on component unmount
      };
    }
  }, [animationUrl]);

  return (
    <div
      ref={containerRef}
      className="opacity-50"
      style={{ width: '100%', height: 'auto' }} // Ajusta el tamaño según sea necesario
    />
  );
};

export default HexagonLottie;