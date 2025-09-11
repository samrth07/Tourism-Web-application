import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./RollingGallery.css";

const RollingGallery = ({
  packages,
  autoplay = false,
  pauseOnHover = false,
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );

  const cylinderWidth = isScreenSizeSm ? 1100 : 2800;
  const faceCount = packages.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const dragFactor = 0.01;
  const cardWidth = isScreenSizeSm ? 130 : 235; 
  const radius = (cardWidth * faceCount) / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Helper function to start smooth infinite rotation
  const startAutoplay = () => {
    controls.start({
      rotateY: -360,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 55,  // slower speed, adjust as needed
      },
    });
  };

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.1,
        ease: "easeOut",
      },
    });
  };

  const transform = useTransform(
    rotation,
    (value) => `rotate3d(0, 1, 0, ${value}deg)`
  );

  // Start/stop autoplay based on prop
  useEffect(() => {
    if (autoplay) {
      startAutoplay();
    } else {
      controls.stop();
    }
  }, [autoplay, controls]);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause animation on hover
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  // Resume smooth animation on mouse leave
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      startAutoplay();
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: radius * 2 + cardWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                      transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,

              }}
            >
              <div>
                <img src={pkg.image} alt={pkg.title} className="gallery-img" />
                <div className="card-info">
                  <h4 className="card-title" title={pkg.title}>
                    {pkg.title}
                  </h4>
                  <div className="card-subtext">{pkg.duration}</div>
                  <div className="price">
                    {pkg.currency}
                    
                    {pkg.price.toLocaleString()}
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
