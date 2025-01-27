import { useState, useEffect } from "react";

const ROTATION_INTERVAL = 3000;
const FADE_INTERVAL = 300;

export default function ImageRotator() {
  type Image = {URL: string, size: [number, number]};  
  const images = [
    {URL: "/ddr.png"},
    {URL: "/documentation.png"},
    {URL: "/code.png"},
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out effect

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false); // Start fade-in effect
      }, FADE_INTERVAL); // Matches the duration of the fade-out effect
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div>
      <img
        src={images[currentImageIndex].URL}
        alt="Rotating"
        className={`lg:h-24 w-24 drop-shadow-lg inset-0 transition-all duration-300 ${
          isFading ? "scale-0" : "scale-100"
        }` }
      />
    </div>
  );
}
