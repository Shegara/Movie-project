import React, { useState, useEffect } from 'react';

const Animation = () => {
  const sentences = [
    "classics in every genre",
    "the perfect movie for you",
    "top-rated award winners",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("Find ");
  const [additionalText, setAdditionalText] = useState("I");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      if (isTyping) {
        const sentence = sentences[currentIndex];
        if (charIndex < sentence.length) {
          setText("Find " + sentence.substring(0, charIndex + 1));
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
            setText("Find ");
          }, 2600); // Wait 2.7 seconds before deleting
        }
      } else {
        if (charIndex > 0) {
          const sentence = sentences[currentIndex];
          setText("Find " + sentence.substring(0, charIndex - 1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
          setText("Find ");
        }
      }
    }, 100); // Typing speed (slower)

    return () => {
      clearInterval(textInterval);
    };
  }, [charIndex, currentIndex, isTyping]);

  useEffect(() => {
    const additionalTextInterval = setInterval(() => {
      setAdditionalText((prevText) => (prevText === "I" ? "" : "I")); // Toggle "I" every 0.5 seconds
    }, 700);

    return () => {
      clearInterval(additionalTextInterval);
    };
  }, []);

  return (
    <div>
      {text}
      {additionalText}
    </div>
  );
};

export default Animation;