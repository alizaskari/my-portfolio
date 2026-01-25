// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import Welcome_to from '../assets/Welcome_to.png';
// import AlizasPortfolioModel from './Alizas_portfolio_Model'


// const Intro = () => {
//   const hiRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     // Welcome_to.png fade in
//     tl.fromTo(
//       hiRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
//     );

//     // Chain other SVGs
//     // tl.fromTo(nextSvgRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
//   }, []);

//   return (
//     <div className="intro-container">
//       <img ref={hiRef} src={Welcome_to} alt="Welcome!" className="intro-png" />
//     </div>
//   );
// };

// export default Intro;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Welcome_to from '../assets/Welcome_to.png';
import Alizas_portfolio_Model from './Alizas_portfolio_Model';

const Intro = () => {
  const hiRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Welcome_to.png fade in
    tl.fromTo(
      hiRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );

    // You can chain other GSAP animations here if needed
  }, []);

  return (
    <div className="intro-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Your fading PNG */}
      <img
        ref={hiRef}
        src={Welcome_to}
        alt="Welcome!"
        className="intro-png"
        style={{ position: 'absolute', top: '20%', left: '10%', zIndex: 2 }}
      />

      {/* Your 3D inflated model */}
      <div className="intro-3d" style={{ width: '100%', height: '100%' }}>
        <Alizas_portfolio_Model />
      </div>
    </div>
  );
};

export default Intro;

