import { useState, useEffect } from "react";

const fonts = ["font-gluten", "font-signika", "font-shanns"];

interface Props {
  text: string;
}

export default function FontRotator({ text }: Props) {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1
      className={`text-3xl font-bold text-center text-neutral-500 p-4 ${fonts[currentFontIndex]}`}
    >
      {text}
    </h1>
  );
}
