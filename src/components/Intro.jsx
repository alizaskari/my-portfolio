import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HiImAliza from '../assets/HiImAliza.svg';

const Intro = () => {
  const hiRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // HiImAliza.svg fade in
    tl.fromTo(
      hiRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );

    // Chain other SVGs
    // tl.fromTo(nextSvgRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div className="intro-container">
      <img ref={hiRef} src={HiImAliza} alt="Hi I'm Aliza" className="intro-svg" />
    </div>
  );
};

export default Intro;
