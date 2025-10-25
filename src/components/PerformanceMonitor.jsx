import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);
  const [frameTime, setFrameTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measurePerformance = () => {
      const currentTime = performance.now();
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        const currentFrameTime = (currentTime - lastTime) / frameCount;
        
        setFps(currentFps);
        setFrameTime(Math.round(currentFrameTime));
        
        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measurePerformance);
    };

    animationId = requestAnimationFrame(measurePerformance);

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') return null;

  const getPerformanceColor = () => {
    if (fps >= 55) return 'text-green-500';
    if (fps >= 45) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="fixed top-20 right-4 z-50 bg-black/80 text-white p-3 rounded-lg font-mono text-sm backdrop-blur-sm">
      <div className="space-y-1">
        <div className={`${getPerformanceColor()}`}>
          FPS: {fps}
        </div>
        <div className="text-gray-300">
          Frame: {frameTime}ms
        </div>
        <div className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor; 