import React, { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = elementRef.current;
    if (currentEl) observer.observe(currentEl);

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    const startVal = 0;
    const endVal = Number(value) || 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo for smooth tech feel
      const easeOut = 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeOut * (endVal - startVal) + startVal);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, value, duration]);

  return (
    <span ref={elementRef} className="font-mono font-bold tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
