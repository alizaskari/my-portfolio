import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Welcome_to from "../assets/Welcome_to.png";
import Model_png from "../assets/Alizas_portfolio.png"; // your PNG model
import "../App.css";

const Intro = () => {
  const welcomeRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in Welcome PNG first
    tl.fromTo(
      welcomeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );

    // Fade in Model PNG right after
    tl.fromTo(
      modelRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="intro-container">
      <img
        ref={welcomeRef}
        src={Welcome_to}
        alt="Welcome!"
        className="intro-png"
      />
      <img
        ref={modelRef}
        src={Model_png}
        alt="Portfolio Model"
        className="intro-png"
      />
    </div>
  );
};

export default Intro;
