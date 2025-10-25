// Performance optimization utilities

// Debounce function to limit function calls
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function to limit function calls
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// Optimize scroll performance
export const optimizeScroll = (element, callback) => {
  let ticking = false;
  
  const updateScroll = () => {
    callback();
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  };

  element.addEventListener('scroll', requestTick, { passive: true });
  
  return () => {
    element.removeEventListener('scroll', requestTick);
  };
};

// Reduce motion for users who prefer it
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize images for different screen sizes
export const getOptimizedImageSrc = (src, width = 800) => {
  // For external images, we can't optimize them, but we can add size parameters
  if (src.includes('pexels.com') || src.includes('unsplash.com') || src.includes('pixabay.com')) {
    // Add size parameters for better performance
    const separator = src.includes('?') ? '&' : '?';
    return `${src}${separator}w=${width}&q=80`;
  }
  return src;
};

// Batch DOM updates
export const batchDOMUpdates = (updates) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

// Memory management for large lists
export const createVirtualScroller = (items, itemHeight, containerHeight) => {
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const totalHeight = items.length * itemHeight;
  
  return {
    getVisibleItems: (scrollTop) => {
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.min(startIndex + visibleCount + 1, items.length);
      return items.slice(startIndex, endIndex);
    },
    getOffset: (scrollTop) => {
      return Math.floor(scrollTop / itemHeight) * itemHeight;
    },
    totalHeight
  };
}; 